import { Movie } from "@/types/movies";
import { buildPathImageUrl } from "@/utils/movies";
import Image from "next/image";

export const MovieDetail = ({ movie }: { movie: Movie }) => {
  const imageUrl = buildPathImageUrl(movie.episode_id);
  return (
    <div className="flex flex-col lg:flex-row bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="min-w-[400]">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={400}
          height={550}
          className="w-full"
        />
      </div>
      <div className="flex flex-col m-4">
        <h2 className="text-2xl font-semibold h-20 m-4">{movie.title}</h2>
        <p className="text-lg m-4">{movie.opening_crawl}</p>
        <h3 className="text-xl font-semibold">Director: {movie.director}</h3>
        <h3 className="text-xl font-semibold">Producer: {movie.producer}</h3>
        <h3 className="text-xl font-semibold">
          Release Date: {movie.release_date}
        </h3>
      </div>
    </div>
  );
};
