import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        {/* 페이지를 새로 고치지 않고 해당 웹사이트, 해당 URL로 이동. */}
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:block">{title}</p>
      </Link>
    </div>
  );
}
