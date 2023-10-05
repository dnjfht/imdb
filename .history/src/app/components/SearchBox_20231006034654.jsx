"use client";

import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
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
