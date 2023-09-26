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
                        
                    </div>
                </div>
            </div>
        </div>
    )
}