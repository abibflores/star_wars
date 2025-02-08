"use client";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

import {Character} from "@/interface/people";
import Image from "next/image";
import {useRouter} from "next/navigation";

export const PeopleCard = ({
	people,
	id,
	isModal = false,
}: {
	people: Character;
	id: string;
	isModal?: boolean;
}) => {
	const router = useRouter();
	const characterImage = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

	return (
		<Card className=" w-[320] md:w-full max-w-md bg-white">
			<CardHeader>
				<CardTitle className="text-center">{people.name}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col items-center space-y-4">
				<Image
					src={characterImage}
					alt={people.name}
					width={300}
					height={300}
					className="rounded-lg border"
				/>
				<ul className="space-y-2 text-center">
					<li>
						<strong>Altura:</strong> {people.height} cm
					</li>
					<li>
						<strong>Peso:</strong> {people.mass} kg
					</li>
					<li>
						<strong>Género:</strong> {people.gender}
					</li>
					<li>
						<strong>Año de Nacimiento:</strong> {people.birth_year}
					</li>
				</ul>
				{isModal && (
					<Button
						variant="outline"
						className="bg-white absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition"
						onClick={() => router.back()}
					>
						⬅️ Cerrar
					</Button>
				)}
			</CardContent>
		</Card>
	);
};
