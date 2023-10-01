import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";

export default function Header() {
  return (
    <div>
      <div>
        <MenuItem title="HOME" address="/" icon={AiFillHome} />
        <MenuItem title="About" address="/about" icon={HiInformationCircle} />
      </div>

      <div></div>
    </div>
  );
}
