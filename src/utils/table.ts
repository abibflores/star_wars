import { People } from "@/interface/people";
import { ColumnDef } from "@tanstack/react-table";

export const columnsForPeople: ColumnDef<People>[] = [
  { accessorKey: "name", header: "Nombre" },
  { accessorKey: "gender", header: "Género" },
  { accessorKey: "birth_year", header: "Año de nacimiento" },
  { accessorKey: "homeworld", header: "Planeta" },
];
