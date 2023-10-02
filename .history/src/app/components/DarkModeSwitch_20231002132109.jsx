"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-emerald-200"
            onClick={() => {
              setTheme("light");
            }}
          />
        ) : (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => {
              setTheme("dark");
            }}
          />
        ))}
    </>
  );
}
