import Hero from './components/Hero'
import Map from './components/Map'
import Layout from './components/Layout'
import Toast from './components/Toast'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Map />
      <Toast />
    </Layout>
  )
}
