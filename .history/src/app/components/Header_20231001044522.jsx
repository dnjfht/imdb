import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";

export default function Header() {
  return (
    <div>
      <div>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={HiInformationCircle} />
      </div>

      <div></div>
    </div>
  );
}
