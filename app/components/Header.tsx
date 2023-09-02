import Image from "next/image";
import Link from "next/link";
import logo from "../../public/zana.svg";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { links } from "../data/NavData";

export default function Header() {
  return (
    <header className="px-4 md:px-8 xl:px-20 h-24 flex justify-between items-center relative sm:fixed w-full z-30">
      <Link href={"/"} className="flex items-center">
        <Image src={logo} alt="" className="w-12" />
        <h1 className="-translate-x-3">Photography</h1>
      </Link>
      <div className="md:gap-4 md:flex max-[768px]:hidden">
        <nav className="flex gap-4">
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                {link.text}
              </Link>
            );
          })}
        </nav>
        <Socials />
      </div>
      <MobileNav />
    </header>
  );
}
