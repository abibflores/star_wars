import { Character, People } from "@/interface/people";
import { fetchPlanetsByUrl } from "./planets";

export const fetchPeolpleByUrl = async (
  url: string
): Promise<People | null> => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const homeworldResponse = await fetchPlanetsByUrl(data.homeworld);
    const homeworld = homeworldResponse?.name || "unknown";

    return {
      name: data.name,
      gender: data.gender,
      birth_year: data.birth_year,
      homeworld: homeworld,
      url: data.url
    };
  } catch (error) {
    console.error("Error fetching people", error);
    return null;
  }
};

export const fetchPeopleById = async(id: string): Promise<Character | null> => {
  const url = `https://swapi.dev/api/people/${id}/`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const homeworldResponse = await fetchPlanetsByUrl(data.homeworld);
    const homeworld = homeworldResponse?.name || "unknown";

    return {
      name: data.name,
      gender: data.gender,
      birth_year: data.birth_year,
      homeworld: homeworld,
      height: data.height,
      mass: data.mass,
      url: data.url
    };
  } catch (error) {
    console.error("Error fetching people", error);
    return null;
  }
}
