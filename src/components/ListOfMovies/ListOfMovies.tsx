'use client'
import { fetchMovies } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";

import { Movie } from "@/types/movies";
import { MovieCard } from "../MovieCard/MovieCard";

export const ListOfMovies = ({ movies }: { movies: Movie[] }) => {
    const { data, error, isLoading } = useQuery({ queryKey: ["movies"], queryFn: fetchMovies, initialData: { results: movies, count: 0, next: null, previous: null } });

    if (isLoading) return <div className="loading">Cargando películas...</div>;
    if (error) return <div className="error">Error al cargar las películas</div>;
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.results && data?.results?.map((movie: Movie) => (
          <MovieCard key={movie.episode_id} movie={movie} />
        ))}
      </div>
    );
}