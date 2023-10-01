"use client";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button>
      {/* <p className={`${darkMode ? "text-white" : "text-black"}`}> */}
      <p>{currentTheme === "dark" ? <MdLightMode /> : <MdDarkMode />}</p>
    </button>
  );
}
