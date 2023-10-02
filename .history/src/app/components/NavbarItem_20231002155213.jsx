"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  // 컴포넌트에서 쿼리스트링 가져오기
  // 다양한 메서드를 제공해 원하는 값을 가져올 수 있게 하는 것이 URLSearchParams 이라는 객체
  // useState 와 유사한 방식으로 선언하고 사용할 수 있음 => const [serchParams, setSearchParams] = useSearchParams();
  // 값을 읽어오는 메서드 : searchParams.get(key) - 특정한 key의 value를 가져오는 메서드, 해당 key 의 value 가 두개라면 제일 먼저 나온 value 만 리턴

  return (
    <div>
      <Link
        className={`${
          genre && genre === param ? "text-emerald-800" : "text-gray-500"
        }
        m-4 hover:text-emerald-700 font-semibold p-2`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
