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
  const { addNewToast } = useToast()
  const socket = useSocket('ws://localhost:8000', {
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
    autoConnect: false
  })

  useEffect(() => {
    initSocket(socket, dispatch, addNewToast)

    // eslint-disable-next-line
  }, [])
  return (
    <Layout>
      <Hero />
      <Map />
      <Toast />
    </Layout>
  )
}
