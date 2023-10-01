import Link from "next/link";
import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={HiInformationCircle} />
      </div>

      <div>
        <Link href="/">
          <DarkModeSwitch />
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
