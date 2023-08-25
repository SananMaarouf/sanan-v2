import ContactForm from './contact_form';

export default function AboutHero() {
    return (
        // Hero Section that takes up the entire viewport height
        <div className="flex">
            {/* so i gotta style this */}
            <div className="container mx-auto md:w-fit py-5">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col md:flex-row p-5 justify-evenly bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 my-5 md:flex-row hover:backdrop-blur-lg">
                    <div class="mt-4 text-center flex flex-col md:flex-row">
                        <div class="flex flex-col">
                            <p class="block mb-1 text-4xl font-bold text-white">Get in touch</p>
                            <ContactForm />
                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <section className='flex flex-col'>
                            <p class="block mb-1 text-4xl font-bold text-white">Socials</p>
                            <div class="flex flex-col">
                                <a href="https://www.linkedin.com/in/sanan-maarouf/" class="block mb-1 text-2xl font-bold text-white">LinkedIn</a>
                                <a href="https://github.com/SananMaarouf" class="block text-2xl font-bold text-white">GitHub</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}