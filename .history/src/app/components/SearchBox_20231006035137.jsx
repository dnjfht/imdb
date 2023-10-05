"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const router = useRouter;

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-6"
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        type="text"
        placeholder="Search keywords..."
      />
      <button className="text-emerald-400 disabled:text-gray-400" type="submit">
        Search
      </button>
    </form>
  );
}
