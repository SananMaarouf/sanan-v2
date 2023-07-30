import Image from 'next/image';

/* Hero constructor */

function Hero(props) {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col text-center sm:text-left lg:flex-row-reverse">
                <img src={props.image} className="max-w-sm rounded-lg shadow-2xl mx-auto"/>
                <div>
                    <h1 className="text-5xl font-bold">{props.title}</h1>
                    <p className="py-6">{props.description}</p>
                    <button className="btn btn-primary flex mx-auto">{props.buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;