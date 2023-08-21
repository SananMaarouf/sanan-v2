import Container from './container';

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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}