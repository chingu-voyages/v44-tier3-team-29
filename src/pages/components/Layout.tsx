import Nav from './Nav'
import Footer from './Footer'
import Toast from './Toast'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className='flex-grow'>{children}</main>
      <Toast />
      <Footer />
    </>
  )
}
