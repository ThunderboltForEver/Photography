import Link from "next/link";
import { ImFacebook, ImTwitter, ImInstagram, ImGithub } from "react-icons/im";
export default function Socials() {
  return (
    <ul className="flex items-center gap-x-2">
      <li>
        <Link href={""}>
          <ImFacebook />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <ImTwitter />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <ImInstagram />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <ImGithub />
        </Link>
      </li>
    </ul>
  );
}
