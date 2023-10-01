"use client";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(theme, systemTheme, currentTheme);
  return (
    <>
      {currentTheme === "dark" ? (
        <>
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => {
              setTheme("light");
            }}
          />
          m
        </>
      ) : (
        <>
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => {
              setTheme("dark");
            }}
          />
        </>
      )}
    </>
  );
}
