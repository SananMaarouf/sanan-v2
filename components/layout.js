import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Hero from '../components/hero'
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-blob bg-no-repeat">
        <Navbar></Navbar>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
