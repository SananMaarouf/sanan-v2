import ContactForm from './contact_form';

export default function AboutHero() {
    return (
        // Hero Section that takes up the entire viewport height
        <div className="min-h-screen flex">
            {/* so i gotta style this */}
            <div className="container mx-5 md:mx-auto py-20">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                    <div class="mt-4 text-center lg:place-self-center">
                        <p class="block mt-1 text-lg font-bold text-white">Contact me</p>
                        {/* form component to send a mail to sanan.adnan97@gmail.com */}
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}