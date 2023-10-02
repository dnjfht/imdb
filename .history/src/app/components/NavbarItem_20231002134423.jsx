"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  // 컴포넌트에서 쿼리스트링 가져오기
  // 다양한 메서드를 제공해 원하는 값을 가져올 수 있게 하는 것이 URLSearchParams 이라는 객체
  // useState 와 유사한 방식으로 선언하고 사용할 수 있음
  console.log(searchParams);
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
