import { PeopleTable } from "@/components/PeopleTable/PeopleTable";
import { People } from "@/interface/people";
import { fetchMovie } from "@/services/movies";
import { fetchPeolpleByUrl } from "@/services/peolple";

export default async function PeoplePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movieData = await fetchMovie(id);
  let peopleData: (People | null)[] = [];

  const listPeople = movieData.characters;

  try {
    const listPeoplePromises = listPeople.map((person) => {
      return fetchPeolpleByUrl(person);
    });
    peopleData = await Promise.all(listPeoplePromises);
  } catch (error) {
    console.error("Error fetching people", error);
    throw new Error("Error fetching people");
  }

  return (
    <div>
      <PeopleTable list={peopleData} />
    </div>
  );
}
