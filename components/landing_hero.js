import Container from './container';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function LandingHero() {

    return (
        // Hero Section that takes up the entire viewport height
        <div className="min-h-screen flex">
            <div className="container mx-auto py-20">
                <div class="flex flex-col justify-evenly my-5 md:flex-row content-center">
                    <div class="mt-4 text-center lg:place-self-center">
                        <p class="block mt-1 text-lg font-bold text-white">Hello, i'm Sanan Maarouf</p>
                        <p class="mt-2 text-white">I am a full stack developer</p>
                    </div>
                    <div class="flex-shrink-0">
                        <img class="rounded-lg" src="/images/stonk.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}