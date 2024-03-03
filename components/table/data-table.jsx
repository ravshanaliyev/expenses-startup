"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useSelector } from "react-redux"
export function TableExpense() {
    const data = useSelector(state => state.data.data)

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>{invoice.name}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell>$100</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}