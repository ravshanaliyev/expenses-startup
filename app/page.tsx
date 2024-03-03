import Navbar from "@/components/shared/navbar";
import { TableExpense } from "@/components/table/data-table";


export default async function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-4">
      <Navbar />
      <div>
        <h1 className="text-2xl my-8 text-center">That's all expenses</h1>
        <TableExpense />
      </div>
    </main>
  );
}
