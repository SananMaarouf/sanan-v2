import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './contact_form';

export default function AboutHero() {
    return (
        // Hero Section that takes up the entire viewport height
        <div className="flex">
            {/* so i gotta style this */}
            <div className="container mx-auto md:w-fit py-5">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col p-5 justify-evenly bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 my-5 md:flex-row hover:backdrop-blur-lg">
                    <div class="mt-4 text-center flex flex-col md:flex-row">
                        <div class="flex flex-col">
                            <p class="block mb-1 text-4xl font-bold text-white">Get in touch</p>
                            <ContactForm />
                        </div>
                        <div class="divider md:divider-horizontal"></div>
                        <section className='flex flex-col'>
                            <p class="block mb-1 text-4xl font-bold text-white">Socials</p>
                            <div class="mt-2 flex flex-col">
                                <a href="https://www.linkedin.com/in/sanan-maarouf/" target="_blank" class="block mb-1 text-2xl font-bold text-white">Linked<FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#0072b1"}}/></a>
                                <a href="https://github.com/SananMaarouf" target="_blank" class="block text-2xl font-bold text-white">GitHub<FontAwesomeIcon icon={faGithubAlt} size="lg" style={{color: "#f6fff5",}} /></a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}