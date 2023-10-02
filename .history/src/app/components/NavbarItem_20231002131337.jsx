import Link from "next/link";

export default function NavbarItem({ title, param }) {
  return (
    <div>
      <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  );
}
