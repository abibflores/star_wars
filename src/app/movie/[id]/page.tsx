import { MovieDetail } from "@/components/MovieDetail/MovieDetail";
import { fetchMovie } from "@/services/movies";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const data = await fetchMovie(id);

  return (
    <div className="min-h-screen">
      <MovieDetail movie={data} />
    </div>
  );
}
