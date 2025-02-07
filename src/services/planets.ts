import { Planet } from "@/types/planets";

export const fetchPlanetsByUrl = async (
  url: string
): Promise<Planet | null> => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      name: data.name,
      rotation_period: data.rotation_period,
      orbital_period: data.orbital_period,
      diameter: data.diameter,
      climate: data.climate,
      gravity: data.gravity,
      terrain: data.terrain,
      surface_water: data.surface_water,
      population: data.population,
    };
  } catch (error) {
    console.error("Error fetching planets", error);
    return null;
  }
};
