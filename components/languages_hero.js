export default function LanguagesHero() {
    return (
        // Hero Section that takes up the entire viewport height
        <div className="min-h-screen flex">
            {/* so i gotta style this */}
            <div className="container py-20 mx-auto">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 sm:flex-col content-center hover:backdrop-blur-lg">
                    <p class="text-4xl font-bold text-white text-center">Languages</p>
                    <div class="mt-4 flex flex-col md:flex-row">
                        {/* front end languages */}
                        <div className="bg-gray-400 rounded-md ">
                            <h1 class="text-2xl font-bold text-white text-center">Front End</h1>
                            {/* unordered list with front end technologies */}
                            <ul class="list-none text-white text-center flex flex-row">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        {/* back end langugages */}
                        <div className="bg-gray-400 rounded-md ">
                            <h1 class="text-2xl font-bold text-white text-center">Back End</h1>
                            {/* unordered list with back end technologies */}
                            <ul class="list-none text-white text-center flex flex-row">
                                <li>Java</li>
                                <li>Python</li>
                                <li>Ruby</li>
                                <li>SQL</li>
                                <li>Dart</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
