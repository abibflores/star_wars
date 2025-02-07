import { People } from "@/types/people";
import { columnsForPeople } from "@/utils/table";
import { Table } from "../Table/Table";

export const PeopleTable = ({ list }: { list: (People | null)[] }) => {
  const cleanList = list.filter((item) => item !== null) as People[];
  return <Table columns={columnsForPeople} data={cleanList} />;
};
