import { ListOfMovies } from "@/components/ListOfMovies/ListOfMovies";
import { fetchMovies } from "@/services/movies";

export default async function Page() {

  const data =  await fetchMovies();
  
  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">Star Wars Movies</h1>
      <ListOfMovies movies={data?.results} />
    </div>
  );
}
