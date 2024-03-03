"use client"
import Image from 'next/image'
import { ModeToggle } from './toggle-theme'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { expenses } from '@/lib/data'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData, setData } from '@/redux/slices/dataSlice'

const Navbar = () => {
    const [arr, setArr] = useState(expenses)
    const dispatch = useDispatch()
    dispatch(setData(arr))


    const { register, handleSubmit, formState: { errors } } = useForm()
    const submit = (data) => {
        const newData = {
            ...data,
            id: Math.random().toString(36).slice(2),
            date: new Date().toISOString(),
        }
        const newArr = [...arr, newData]
        setArr(newArr)
    }
    return (
        <div className='flex justify-between max-w-[1200px] mx-auto my-6 items-center px-4'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={120}
                height={10}
                priority
            />
            <div className="flex items-center gap-4">
                <ModeToggle />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Create</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[400px] lg:max-w-[425px] mx-4 rounded-lg">
                        <DialogHeader>
                            <DialogTitle>Create an expense</DialogTitle>
                            <DialogDescription>
                                Fill in the form to create a new expense
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(submit)} className="grid gap-4 py-4">
                            <div className=" gap-4">
                                <Input {...register("name", { required: true })} id="name" placeholder="chingiz" className="col-span-3" />
                            </div>
                            <div className="gap-4">
                                <Input {...register("amount", { required: true })} type='number' id="money" placeholder="100000" className="col-span-3" />
                            </div>
                            <Button className='w-full' type="submit">Create an expense</Button>

                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Navbar