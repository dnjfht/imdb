import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address}>
        {/* 페이지를 새로 고치지 않고 해당 웹사이트, 해당 URL로 이동. */}
        <Icon />
        <p>{title}</p>
      </Link>
    </div>
  );
}
