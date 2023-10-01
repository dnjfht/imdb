"use context";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <button>
      {/* <p className={`${darkMode ? "text-white" : "text-black"}`}> */}
      <p>
        {/*darkMode ? <MdLightMode /> : <MdDarkMode />*/}
        <MdLightMode />
        <MdDarkMode />
      </p>
    </button>
  );
}
