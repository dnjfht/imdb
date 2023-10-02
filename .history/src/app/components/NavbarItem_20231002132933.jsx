import Link from "next/link";

export default function NavbarItem({ title, param }) {
  return (
    <div>
      <Link
        className={`m-4 hover:text-emerald-700 font-semibold p-2`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
