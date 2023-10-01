"use client";

import { useState } from "react";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setDarkMode((prev) => !prev);
      }}
    >
      <p className={`${darkMode ? "text-white" : "text-black"}`}>
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </p>
    </button>
  );
}
