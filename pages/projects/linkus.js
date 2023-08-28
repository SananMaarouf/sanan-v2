import Layout from "../../components/layout";
import Head from "next/head";

export default function Linkus({ preview }) {
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{`LinkUs`}</title>
                </Head>
                <div className="min-h-screen flex">
                    {/* so i gotta style this */}
                    <div className="container py-20 mx-5 lg:mx-auto">
                        {/* stuff in the container goes in here */}
                        <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borde border-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                            <div class="mt-4 text-center lg:place-self-center">
                            <h1 class="block mt-1 text-4xl font-poppins text-white">LinkUs</h1>
                            <h2 class="mt-2 font-poppins text-3xl text-white">A solution for easily sharing business cards in the new and fast growing digital world </h2>
                            </div>
                            <div class="flex self-center">
                                <img class="rounded-lg" src="/images/linkus-horisontal.png" />
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
                                    The idea for the application comes from Caroline Corneliussen and was presented to us at the school's presentation on bachelor opportunities. 
                                    Caroline wanted an application that will highlight and simplify the use and sharing of business cards in a structured and rich way. At the same time, 
                                    she also wanted to have the opportunity to share posts with your contacts, view the position of users when they are at conferences, and the opportunity 
                                    for both private and business users. 
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
                                <p className="mt-2 font-poppins text-lg text-white">
                                    We were interested in the idea and started working with Caroline.
                                </p>
                                <p className="mt-2 font-poppins text-lg text-white">
                                    In May of 2021, after many months of hard work, it was time to hand over the product to Caroline. 
                                </p>
                                <p className="mt-2 font-popping text-lg text-white">
                                The complete journey from idea to prototype to real-life product was documented as a part of our bachelor's thesis and was also handed in at the same time and won the award for best bachelors thesis. 
                                </p>
                                <p className="mt-2 font-poppins text-lg text-white">
                                    If you are interested in reading it, you can read it <a className="btn bg-oransje text-white hover:bg-white hover:text-black" target="_blank" href="https://openarchive.usn.no/usn-xmlui/handle/11250/2767296">Here</a>
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
                                    Framework: 
                                </p>
                                <p className="font-poppins text-lg text-white">
                                    We used Flutter as it is easy to learn and has great performance
                                    and it allows us to create a cross plattform application with one codebase. 
                                </p>
                                <p className="mt-2 font-poppins text-2xl text-white">
                                    Back end:
                                </p>
                                <p className="font-poppins text-lg text-white">
                                    We used Firebase as our backend for our realtime database, authenthication and more.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </Layout>
        </>
    )
}