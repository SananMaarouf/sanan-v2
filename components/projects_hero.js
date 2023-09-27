import ProjectCard from './project_card';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsHero() {

    return (
        // Hero Section that takes up the entire viewport height
        <AnimatePresence>
            <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div id='projects' className="min-h-screen flex">
                    <div className="container px-5 py-20 md:mx-auto">
                        {/* stuff in the container goes in here */}
                        <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 sm:flex-col content-center hover:backdrop-blur-lg">
                            <p class="text-4xl font-bold text-white text-center">Projects</p>
                            {/* carousel with card components inside */}
                            <div className='my-5 carousel carousel-center md:mx-auto'>
                                <div className='carousel-item mx-4'>
                                    <ProjectCard image="/images/linkus.png" description="LinkUs" link={"/projects/linkus"} />
                                </div>
                                <div className='carousel-item mx-4'>
                                    <ProjectCard image="/images/moviematch.png" description="Movie Match" link={"/projects/movie_match"} />
                                </div>
                                <div className='carousel-item mx-4'>
                                    <ProjectCard image="/images/greentalk.jpg" description="GreenTalk" link={"/projects/greentalk"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}