import { useToast } from '@hooks/useToast'
import { selectToastList } from '@store/features/toasts/toastSlice'
import { useAppSelector } from '@store/store'
import { useEffect } from 'react'
import Image from 'next/image'

const Toast: React.FC = () => {
  const toastList = useAppSelector(selectToastList).toasters
  const { removeTargetToast } = useToast()

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        removeTargetToast(toastList[0].uid)
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [toastList, removeTargetToast])

  const handleRemoveToast = (e: React.MouseEvent) => {
    const div = e.target as HTMLDivElement
    const uid = div.id
    removeTargetToast(uid)
  }

  return (
    <div className='fixed flex flex-col bottom-[30px] w-auto right-5 z-50'>
      {toastList.map(t => {
        let imagePath
        switch (t.type) {
          case 'info':
            imagePath = '/artemis-icon-blue.png'
            break
          case 'success':
            imagePath = '/artemis-icon.png'
            break
          case 'warning':
            imagePath = '/artemis-icon-yellow.png'
            break
          default:
            imagePath = '/artemis-icon.png'
        }

        return (
          <div
            className='bg-[#fffdfa] m-1 flex flex-wrap rounded-xl opacity-[88%]'
            onClick={handleRemoveToast}
            id={t.uid}
            key={t.uid}>
            <Image
              className='m-3'
              priority={true}
              width={50}
              height={50}
              alt='notice'
              src={imagePath}
            />
            <span className='my-3 mr-4 text-[12px] sm:text-[14px] flex-wrap'>
              {t.type.toUpperCase()} <br />
              {t.message}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Toast
