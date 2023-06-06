import Hero from './components/Hero'
import Map from './components/Map'
import Layout from './components/Layout'
import { useEffect } from 'react'
import { initSocket } from '@/lib/utils/socket'
import { useAppDispatch } from '@/lib/store/store'
import { useToast } from '@/lib/hooks/useToast'
import { useSocket } from '@/lib/hooks/useSocket'
import Socket from './components/Socket'

export default function Home() {
  const dispatch = useAppDispatch()
  const { addNewToast, removeTargetToast } = useToast()

  const url = process.env.NEXT_PUBLIC_API_URL ?? 'ws://localhost:8000'

  const socket = useSocket(url, {
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
    autoConnect: false,
    auth: {
      uid: 'test'
    }
  })

  useEffect(() => {
    // initSocket(socket, dispatch, addNewToast)
    // eslint-disable-next-line
  }, [])

  // const handleReport = () => {
  //   if (!socket) return

  //   socket.emit('system_message', 'Attention!!!A Stray Cat Found In Seoul!!!')
  // }

  // const handleAddToast = () => {
  //   addNewToast({
  //     type: 'info',
  //     message: 'This is a info toast. Click toast to discard.'
  //   })
  // }
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
      </button>
      <Socket></Socket> */}
      <Hero />
      <Map />
    </Layout>
  )
}
