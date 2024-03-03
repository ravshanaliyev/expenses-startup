import Image from 'next/image'
import { ModeToggle } from './toggle-theme'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const Navbar = () => {
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
                        <div className="grid gap-4 py-4">
                            <div className=" gap-4">
                                <Input id="name" placeholder="chingiz" className="col-span-3" />
                            </div>
                            <div className="gap-4">
                                <Input type='number' id="money" placeholder="100000" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button className='w-full' type="submit">Create an expense</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Navbar