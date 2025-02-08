import { Movie } from "@/types/movies";
import {
  buildPathImageUrl,
  getEpisodeNumber,
  getMovieId,
} from "@/utils/movies";
import Image from "next/image";
import Link from "next/link";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = buildPathImageUrl(movie.episode_id);
  const title = getEpisodeNumber(movie.episode_id);
  const id = getMovieId(movie.url);

  return (
    <Link href={`/movie/${id}`} key={movie.episode_id}>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <Image src={imageUrl} alt={movie.title} width={400} height={550} />
        <h2 className="text-2xl font-semibold h-20 m-4">
          {`${title}: ${movie.title}`}
        </h2>
      </div>
    </Link>
  );
};
