import Link from 'next/link';

// this is a card component that takes in an image, description and link to project
export default function ProjectCard({ image, description, link }) {
  return (
    <div className="mx-2 max-w-xs md:max-w-md rounded-lg overflow-hidden shadow-lg bg-morke-lilla">
      <img className="w-full h-3/5" src={image} alt="Card Image" />
      <div className="px-6 py-4 text-center text-white">
        <h1 className="font-bold text-xl mb-2">{description}</h1>
      </div>
      <div className="mx-auto flex justify-center py-4">
        <Link className="btn btn-primary bg-oransje text-white font-bold py-2 px-4 rounded hover:bg-lilla" href={link}>
            Learn More
        </Link>
      </div>
    </div>
  );
}