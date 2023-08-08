import Container from './container';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function LandingHero() {

    return (
        // Hero Section that takes up the entire viewport height
        <div className="min-h-screen flex">
            {/* so i gotta style this */}
            <div className="container mx-auto py-20">
                {/* stuff in the container goes in here */}
                <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borde border-gray-100 my-5 md:flex-row content-center hover:backdrop-blur-lg">
                    <div class="mt-4 text-center lg:place-self-center">
                        <p class="block mt-1 text-lg font-bold text-white">Hello, i'm Sanan Maarouf</p>
                        <p class="mt-2 text-white">I am a full stack developer</p>
                    </div>

                    <div class="flex self-center">
                        <img class="rounded-lg" src="/images/portrett_1_t.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}