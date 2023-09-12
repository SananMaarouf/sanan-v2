import { motion, AnimatePresence } from 'framer-motion';

export default function AboutHero() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 300, opacity: 0}}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div id="about" className="min-h-screen flex">
                {/* so i gotta style this */}
                <div className="container mx-5 py-20 md:mx-auto">
                    {/* stuff in the container goes in here */}
                    <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 sm:flex-col content-center hover:backdrop-blur-lg">
                        <p class="text-4xl font-bold text-white text-center">About me</p>
                        <div class="mt-4 md:flex flex-row">
                            <div className='text-white text-2xl my-auto '>
                                <p class="mt-2">I am a 26 year old full stack developer, working in <span class="underline decoration-2">Oslo, Norway</span></p>
                                <p class="mt-2">
                                    I've been interested in computers for as long as I can remember. 
                                    I really enjoy learning new technologies and use them to create practical solutions.
                                </p>
                            </div>
                            <div class="flex self-center rounded-3xl">
                                <img class="flex self-center rounded-3x py-5 md:max-w-md lg:max-w-lg " src="/images/about_me.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </motion.div>
        </AnimatePresence>
    );
}