import {PeopleCard} from "@/components/PeopleCard/PeopleCard";
import {fetchPeopleById} from "@/services/peolple";
import {notFound} from "next/navigation";

export default async function ModalPeoplePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const {id} = await params;
	let people = null;

	try {
		people = await fetchPeopleById(id);
	} catch (error) {
		console.log("Error fetch People", error);
		throw Error;
	}

	if (!people) return notFound();

	return (
		<div className="w-full flex items-center justify-center min-h-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-20">
			<PeopleCard people={people} id={id} />
		</div>
	);
}
