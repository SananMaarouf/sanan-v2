import Link from 'next/link';

// this is a card component that takes in an image, description and link to project
export default function ProjectCard({ image, description, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{description}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={link}>
            Learn More
        </Link>
      </div>
    </div>
  );
}