import { People } from "@/types/people";
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
    };
  } catch (error) {
    console.error("Error fetching people", error);
    return null;
  }
};
