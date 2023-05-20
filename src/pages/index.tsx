import Hero from './components/Hero'
import Map from './components/Map'
import Layout from './components/Layout'
import Toast from './components/Toast'
import { useEffect } from 'react'
import { initSocket } from '@/lib/utils/socket'
import { useAppDispatch } from '@/lib/store/store'
import { useToast } from '@/lib/hooks/useToast'
import { useSocket } from '@/lib/hooks/useSocket'

export default function Home() {
  const dispatch = useAppDispatch()
  const { addNewToast, removeTargetToast } = useToast()
  const socket = useSocket('ws://localhost:8000', {
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
    autoConnect: false
  })

  useEffect(() => {
    initSocket(socket, dispatch, addNewToast)

    // eslint-disable-next-line
  }, [])

  const handleReport = () => {
    if (!socket) return

    socket.emit('system_message', 'Attention!!!A Stray Cat Found In Seoul!!!')
  }

  const handleAddToast = () => {
    addNewToast({
      type: 'info',
      message: 'This is a info toast. Click toast to discard.'
    })
  }
  return (
    <Layout>
      {/* <button
        className='absolute top-[90px] left-5'
        onClick={handleAddToast}>
        Add Toaster
      </button>
      <button
        className='absolute top-[120px] left-5'
        onClick={handleReport}>
        Report Location
      </button> */}
      <Hero />
      <Map />
      <Toast />
    </Layout>
  )
}
