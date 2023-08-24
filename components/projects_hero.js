import Container from './container';
import ProjectCard from './project_card';
import Flicking from '@egjs/react-flicking';
import "@egjs/react-flicking/dist/flicking.css";
export default function ProjectsHero() {

    return (
        // Hero Section that takes up the entire viewport height
        <div className="min-h-screen flex">
            {/* so i gotta style this */}
            <div className="container mx-5 py-20 mx-auto">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col py-4 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 sm:flex-col content-center hover:backdrop-blur-lg">
                    <p class="text-4xl font-bold text-white text-center">Projects</p>
                    <div class=" text-white text-center">
                        <Flicking circular={true}>
                            <div className='panel mx-2'>
                                <ProjectCard image="/images/about_me.png" description="LinkUs" link={"/projects/linkus"}/>
                            </div>
                            <div className='panel mx-2'>
                                <ProjectCard image="/images/about_me.png" description="Movie Match" link={"/projects/movie_match"}/>
                            </div>
                            <div className='panel mx-2'>
                                <ProjectCard image="/images/about_me.png" description="GreenTalk" link={"/projects/greentalk"}/>
                            </div>
                        </Flicking>
                    </div>
                </div>
            </div>
        </div>
    )
}