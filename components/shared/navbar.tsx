import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-[1200px] mx-auto my-6 items-center'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={120}
                height={10}
                priority
            />
            <div className="flex items-center gap-4">
                <p>theme</p>
                <p>create</p>
            </div>
        </div>
    )
}

export default Navbar