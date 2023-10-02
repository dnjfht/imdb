import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div>
      <NavbarItem title="Trending" address="/trending" />
      <NavbarItem title="Top Rated" address="/top rated" />
    </div>
  );
}
