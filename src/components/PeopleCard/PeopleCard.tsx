"use client";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

import {Character} from "@/interface/people";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const PeopleCard = ({people, id}: {people: Character; id: string}) => {
    const router = useRouter()
	const characterImage = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

	return (
		<Card className="w-full max-w-md">
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
				<Button variant="outline" onClick={() => router.back()}>
					⬅️ Volver
				</Button>
			</CardContent>
		</Card>
	);
};
