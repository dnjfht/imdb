import Link from "next/link";

export default function NavbarItem({ title, param }) {
  return (
    <div>
      <Link href={`/?genre=${param}`}>
        <p>{title}</p>
      </Link>
    </div>
  );
}
