import Link from "next/link";

export default function NavbarItem({ title, param }) {
  return (
    <div>
      <Link className={`m-4 hover:text-emerald-800`} href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  );
}
