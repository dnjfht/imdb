import MenuItem from "./MenuItem";

import { BiSolidHomeSmile } from "react-icons/bi";

export default function Header() {
  return (
    <div>
      <div>
        <MenuItem title="HOME" address="/" />
        <MenuItem title="About" address="/about" />
      </div>

      <div></div>
    </div>
  );
}
