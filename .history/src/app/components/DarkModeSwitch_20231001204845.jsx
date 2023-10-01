"use client";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <MdDarkMode
          className="text-xl cursor"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </>
  );
}
