import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from '../components/navbar'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";



export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-blob bg-cover bg-no-repeat">
        <Navbar></Navbar>
        <main className='scroll-smooth'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
