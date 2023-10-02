"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  // 컴포넌트에서 쿼리스트링 가져오기

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
