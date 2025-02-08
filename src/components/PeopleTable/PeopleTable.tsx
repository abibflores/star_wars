"use client";
import { columnsForPeople } from "@/utils/table";
import { Table } from "../Table/Table";
import { useState } from "react";
import { People } from "@/interface/people";

export const PeopleTable = ({ list }: { list: (People | null)[] }) => {
  const cleanList = list.filter((item) => item !== null) as People[];

  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <div className="mt-6 w-full overflow-x-hidden">
      <h2 className="flex justify-center text-2xl font-bold p-6">Personajes</h2>
      <div className="p-4">
        <input
          type="text"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar personaje..."
          className="border p-2 w-full text-gray-500"
        />
      </div>
      <Table
        columns={columnsForPeople}
        data={cleanList}
        defatultSorting={[{ id: "name", desc: false }]}
        globalFilter={globalFilter}
      />
    </div>
  );
};
