import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { MovieCard } from "./MovieCard";
import { Movie } from "@/types/movies";

// Mock de las funciones de utilidades
jest.mock("@/utils/movies", () => ({
  buildPathImageUrl: jest.fn(
    (episodeId) => `https://fakeurl.com/${episodeId}.jpg`
  ),
  getEpisodeNumber: jest.fn(() => `Episode IV`),
  getMovieId: jest.fn((url) => url.match(/\d+/)?.[0] || "1"),
}));

const mockMovie: Movie = {
  title: "A New Hope",
  episode_id: 4,
  url: "https://swapi.dev/api/films/4/",
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
};

describe("MovieCard Component", () => {
  it("debería renderizar el título de la película con su episodio", () => {
    render(<MovieCard movie={mockMovie} />);

    const titleElement = screen.getByText("Episode IV: A New Hope");
    expect(titleElement).toBeInTheDocument();
  });

  it("debería renderizar la imagen con la URL generada", () => {
    render(<MovieCard movie={mockMovie} />);

    const imageElement = screen.getByRole("img", { name: /a new hope/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("alt", "A New Hope");
  });

  it("debería contener el enlace a la página de la película", () => {
    render(<MovieCard movie={mockMovie} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/movie/4");
  });
});
