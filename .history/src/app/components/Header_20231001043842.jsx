import MenuItem from "./MenuItem";

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
