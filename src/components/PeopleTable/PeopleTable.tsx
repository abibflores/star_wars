"use client";
import { People } from "@/types/people";
import { columnsForPeople } from "@/utils/table";
import { Table } from "../Table/Table";
import { useState } from "react";

export const PeopleTable = ({ list }: { list: (People | null)[] }) => {
  const cleanList = list.filter((item) => item !== null) as People[];

  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  const paginatedData = cleanList.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const handleNextPage = () => {
    if ((pageIndex + 1) * pageSize < cleanList.length) {
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold p-4">Personajes</h2>
      <Table
        columns={columnsForPeople}
        data={paginatedData}
        defatultSorting={[{ id: "name", desc: false }]}
      />
      <div className="flex justify-between p-4">
        <button
          onClick={handlePrevPage}
          disabled={pageIndex === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Anterior
        </button>
        <span>Página {pageIndex + 1}</span>
        <button
          onClick={handleNextPage}
          disabled={(pageIndex + 1) * pageSize >= cleanList.length}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
