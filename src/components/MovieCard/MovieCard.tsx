import { Movie } from "@/types/movies";
import Link from "next/link";

export const MovieCard = ({ movie }: { movie: Movie}) => {
    return (
        <Link href={`/movie/${movie.episode_id}`} key={movie.episode_id}>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold">{movie.title}</h2>
            <p className="text-gray-400">{movie.release_date}</p>
            </div>
      </Link>
    );
}