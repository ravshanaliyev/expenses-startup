"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    id: string
    amount: number
    status: "tulangan" | "tulanmagan",
    name: string,
    date: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
]
