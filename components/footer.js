import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import ContactHero from './contact_hero'

export default function Footer() {
  return (
    <footer id='footer' className="bg-morke-lilla bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 md:flex-row">
        <ContactHero />
        
    </footer>
  )
}
