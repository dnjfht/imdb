import Link from "next/link";
import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";

export default function Header() {
  return (
    <div>
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={HiInformationCircle} />
      </div>

      <div>
        <Link href="/">
          <h2>
            <span></span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
