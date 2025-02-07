import { Movie, MoviesResponse } from "@/types/movies";

export const fetchMovies = async (): Promise<MoviesResponse> => {
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
      results: [],
    };
  }
};

export const fetchMovie = async (id: string): Promise<Movie> => {
  try {
    const response = await fetch(`https://swapi.dev/api/films/${id}/`, {
      next: { revalidate: 604800 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie", error);
    return {
      title: "",
      episode_id: 0,
      opening_crawl: "",
      director: "",
      producer: "",
      release_date: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: "",
      edited: "",
      url: "",
    };
  }
};
