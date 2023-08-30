import Link from "next/link";

export default function MobileNav() {

    return (

        <nav className="md:hidden text-xl font-semibold absolute top-0 right-0 min-h-screen bg-[#f9fbfb] flex flex-col items-center justify-center gap-6 w-[250px]">
           
            
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/portfolio"}>Portfolio</Link>
            <Link href={"/contact"}>Contact</Link>
        </nav>



    )
}