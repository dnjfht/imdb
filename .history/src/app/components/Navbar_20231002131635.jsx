import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
