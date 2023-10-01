import MenuItem from "./MenuItem";

export default function Header({ title, address, icon }) {
  return (
    <div>
      <div>
        <MenuItem title="HOME" address="/" />
      </div>

      <div></div>
    </div>
  );
}
