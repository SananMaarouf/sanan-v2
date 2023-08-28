import Layout from "../../components/layout";
import Head from "next/head";

export default function Greentalk({ preview }) {
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{`Greentalk`}</title>
                </Head>
                <div className="min-h-screen flex">
                    {/* so i gotta style this */}
                    <div className="container py-20 mx-5 lg:mx-auto">
                        {/* stuff in the container goes in here */}
                        <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borde border-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                            <div class="mt-4 text-center lg:place-self-center">
                            <h1 class="block mt-1 text-4xl font-poppins text-white">Greentalk</h1>
                            <h2 class="mt-2 font-poppins text-3xl text-white">If you love our planet, you'll love Greentalk</h2>
                            </div>
                            <div class="flex self-center">
                                <img class="rounded-lg" src="/images/greentalk.jpg" />
                            </div>
                        </div>
                        <div class="mt-10 flex flex-col items-center md:mt-20">
                            <div class="scroll"></div>
                        </div>  
                    </div>
                </div>
                <div className="min-h-screen flex">
                    <div className="container py-20 mx-5 lg:mx-auto">
                        {/* stuff in the container goes in here */}
                        <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borde border-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                            <div class="mt-4 lg:place-self-center">
                                <p class="block mt-1 text-4xl font-poppins text-white text-center">History</p>
                                <p class="mt-2 font-poppins text-lg text-white">
                                    In our second year of university, we were tasked with creating a CRUD application for our semester assignment.
                                    After some time debating what kind of site and what it should be about, we landed on a forum for environmentalists
                                    since global warming, climate change, and pollution are becoming bigger problems, we wanted to create a space where 
                                    likeminded people could communicate and start events to meet up. 
                                </p>
                                <p className="mt-2 font-poppins text-lg text-white">
                                    Me and my group that consisted of: 
                                    <ul className="list-disc list-inside">
                                        <li className="text-white">Sanan Maarouf (Me)</li>
                                        <li className="text-white">Stian Tonning Flatset</li>
                                        <li className="text-white">Sigve Eilertsent</li>
                                        <li className="text-white">Erlend Hollund</li>
                                        <li className="text-white">Hanna Deanna Castillo Singueo</li>
                                        <li className="text-white">Mikkel Mohaugen</li>
                                    </ul>
                                </p>
                                
                                <p className="mt-2 font-poppins text-lg text-white">
                                    If you are interested, check out the source code on <a className="btn bg-oransje text-white hover:bg-white hover:text-black" target="_blank" href="https://github.com/SananMaarouf/Greentalk">Github</a>
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
                                    Front end: 
                                </p>
                                <p className="font-poppins text-lg text-white">
                                    HTML, CSS, JavaScript
                                </p>
                                <p className="mt-2 font-poppins text-2xl text-white">
                                    Back end:
                                </p>
                                <p className="font-poppins text-lg text-white">
                                    PHP and MySQL.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </Layout>
        </>
    )
}