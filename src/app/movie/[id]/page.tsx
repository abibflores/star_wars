import { MovieDetail } from "@/components/MovieDetail/MovieDetail";
import { fetchMovie } from "@/services/movies";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const data = await fetchMovie(id);

  return (
    <div>
      <MovieDetail movie={data} />
    </div>
  );
}
