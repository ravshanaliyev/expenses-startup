import Navbar from "@/components/shared/navbar";
import { Payment, columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"


async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "tulanmagan",
      name: "Chingiz",
      date: "2024-10-10",
    },
  ]
}
export default async function Home() {
  const data = await getData()
  return (
    <main className="max-w-[1200px] mx-auto px-4">
      <Navbar />
      <div>
        <h1 className="text-2xl my-8 text-center">That's all expenses</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
