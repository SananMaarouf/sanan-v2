import { motion } from "framer-motion"

export default function LandingHero() {

    return (
        // Hero Section that takes up the entire viewport height
            <div id='home' className="min-h-screen flex">
                {/* so i gotta style this */}
                <div className="container py-20 mx-5 md:mx-auto">
                    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}>
                    {/* stuff in the container goes in here */}
                    <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                        <div class="mt-4 text-center md:place-self-center">
                        <h1 class="block mt-1 text-4xl font-poppins text-white">Hello, i'm <span class="underline decoration-2">Sanan Maarouf</span></h1>
                        <h2 class="mt-2 font-poppins text-3xl text-white">I am a full stack developer</h2>
                        </div>

                        <div class="flex self-center">
                            <img class="rounded-lg" src="/images/portrett_1_t.png" />
                        </div>
                    </div>
                    </motion.div>
                    <div class="mt-10 flex flex-col items-center md:mt-20">
                        <div class="scroll"></div>
                    </div>  
                </div>
            </div>
    )
}