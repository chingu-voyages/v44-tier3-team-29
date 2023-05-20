import { useToast } from '@hooks/useToast'
import { selectSocket } from '@store/features/socket/socketSlice'
import { selectToastList } from '@store/features/toasts/toastSlice'
import { useAppSelector } from '@store/store'
import { useEffect } from 'react'

const Toast: React.FC = () => {
  const toastList = useAppSelector(selectToastList).toasters
  const socket = useAppSelector(selectSocket).socket
  const { addNewToast, removeTargetToast } = useToast()

  const handleAddToast = () => {
    addNewToast({ type: 'notification', message: 'hello' })
  }

  const handleRemoveToast = (e: React.MouseEvent) => {
    const div = e.target as HTMLDivElement
    const uid = div.id
    removeTargetToast(uid)
  }

  const handleReport = () => {
    if (!socket) return

    socket.emit('system_message', 'Attention!!!A Stray Cat Found In Seoul!!!')
  }

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

  return (
    <>
      <button
        className='absolute top-[100px] right-0'
        onClick={handleAddToast}>
        Add Toaster
      </button>
      <button onClick={handleReport}>Report Location</button>
      <div className='fixed bottom-[100px] right-5'>
        {toastList.map(t => (
          <div
            onClick={handleRemoveToast}
            id={t.uid}
            key={t.uid}>
            {t.message}
          </div>
        ))}
      </div>
    </>
  )
}

export default Toast
