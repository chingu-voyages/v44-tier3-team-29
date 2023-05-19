import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </>
  )
}
