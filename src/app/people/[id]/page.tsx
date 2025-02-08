import { notFound } from "next/navigation";
import { fetchPeopleById } from "@/services/peolple";
import { PeopleCard } from "@/components/PeopleCard/PeopleCard";

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let people = null

  try {
    people = await fetchPeopleById(id);
  } catch (error) {
    console.log("Error fetch People", error);
    throw Error 
  }

  if (!people) return notFound();

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gray-100 p-4">
        <PeopleCard people={people} id={id} />
    </div>);
}
