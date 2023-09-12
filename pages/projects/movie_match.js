import Layout from "../../components/layout";
import Head from "next/head";

export default function MovieMatch({ preview }) {
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{`MovieMatch`}</title>
                </Head>
                <div className="min-h-screen flex">
                    {/* so i gotta style this */}
                    <div className="container py-20 mx-5 md:mx-auto">
                        {/* stuff in the container goes in here */}
                        <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borde border-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                            <div class="mt-4 text-center lg:place-self-center">
                            <h1 class="block mt-1 text-4xl font-poppins text-white">MovieMatch</h1>
                            <h2 class="mt-2 font-poppins text-3xl text-white">
                                Do you and your partner constantly argue about what movies to watch?
                                Movie Match could be the solution to your troubles</h2>
                            </div>
                            <div class="flex self-center">
                                <img class="rounded-lg" src="/images/moviematch.png" />
                            </div>
                        </div>
                        <div class="mt-10 flex flex-col items-center md:mt-20">
                            <div class="scroll"></div>
                        </div>  
                    </div>
                </div>
                <div className="flex">
                    <div className="container py-20 mx-5 lg:mx-auto">
                        {/* stuff in the container goes in here */}
                        <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borde border-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                            <div class="mt-4 lg:place-self-center">
                                <p class="block mt-1 text-4xl font-poppins text-white text-center">History</p>
                                <p class="mt-2 font-poppins text-lg text-white">
                                    In our second year of university, we were tasked with creating a practical Android app for our semester assignment.
                                    Me and my group spent some time talking about our trials and tribulations and how an app could solve them.
                                    Turns out that therapy is the solution to most of them, but what could be solved was the issue of finding a movie that everybody likes on movie nights and thus the idea was born. 
                                </p>
                                <p className="mt-2 font-poppins text-lg text-white">
                                    Me and my group that consisted of: 
                                    <ul className="list-disc list-inside">
                                        <li className="text-white">Sanan Maarouf (Me)</li>
                                        <li className="text-white">Stian Tonning Flatset</li>
                                        <li className="text-white">Sigve Eilertsent</li>
                                        <li className="text-white">Erlend Hollund</li>
                                    </ul>
                                </p>
                                
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="flex">
                    <div className="container mx-5 lg:mx-auto">
                        {/* stuff in the container goes in here */}
                        <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borde border-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                            <div class="mt-4 lg:place-self-center">
                                <p class="block mt-1 text-4xl font-poppins text-white text-center">Technologies used</p>
                                <p class="mt-2 font-poppins text-2xl text-white">
                                    Design:
                                </p>
                                <p className="font-poppins text-lg text-white">For prototyping and design we used AdobeXD</p>
                                <p className="mt-2 font-poppins text-2xl text-white">
                                    Programming language: 
                                </p>

                                <p className="font-poppins text-lg text-white">
                                    We used Java for the application and Firebase for authenthication and database
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </Layout>
        </>
    )
}