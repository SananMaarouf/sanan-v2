import Container from './container';
import ProjectCard from './project_card';
import Flicking from '@egjs/react-flicking';
export default function ProjectsHero() {

    return (
        // Hero Section that takes up the entire viewport height
        <div className="min-h-screen flex">
            {/* so i gotta style this */}
            <div className="container mx-5 py-20 mx-auto">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 sm:flex-col content-center hover:backdrop-blur-lg">
                    <p class="text-4xl font-bold text-white text-center">Projects</p>
                    <div class="mt-4 md:flex flex-row">
                        <div className='text-white text-2xl my-auto '>
                            {/* carousel with card components with image, description and link to project */}
                            <div class="flex flex-row justify-evenly">
                                <ProjectCard image="/images/about_me.png" description="Movie Match" link={"/projects/movie_match"}/>
                                <ProjectCard image="/images/about_me.png" description="LinkUs" link={"/projects/linkus"}/>
                                <ProjectCard image="/images/about_me.png" description="GreenTalk" link={"/projects/greentalk"}/>
                            </div>
                        </div>
                        {/* <Flicking
                            className="flicking"
                            circular={true}
                            gap={10}
                            moveType="snap"
                            bound={true}
                            autoResize={true}
                        >
                            <ProjectCard
                                image="/images/about_me.png"
                                description="Project 1"
                                
                            />
                            <ProjectCard
                                image="/images/about_me.png"
                                description="Project 2"
                                
                            />
                            <ProjectCard
                                image="/images/about_me.png"
                                description="Project 3"
                                
                            />
                        </Flicking> */}
                    </div>
                </div>
            </div>
        </div>
    )
}