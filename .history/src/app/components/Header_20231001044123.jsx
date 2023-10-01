import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";

export default function Header() {
  return (
    <div>
      <div>
        <MenuItem title="HOME" address="/" icon={AiFillHome} />
        <MenuItem title="About" address="/about" />
      </div>

      <div></div>
    </div>
  );
}
