import Link from "next/link";

export default function NavbarItem({ title, params }) {
  return (
    <div>
      <Link className="">
        {/* 페이지를 새로 고치지 않고 해당 웹사이트, 해당 URL로 이동. */}
        <p className="">{title}</p>
      </Link>
    </div>
  );
}
