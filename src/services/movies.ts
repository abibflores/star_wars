import { MoviesResponse } from "@/types/movies";

export const fetchMovies = async (): Promise<MoviesResponse>  => {
    try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movies", error);
        return {
            count: 0,
            next: null,
            previous: null,
            results: []
        }
    }
};