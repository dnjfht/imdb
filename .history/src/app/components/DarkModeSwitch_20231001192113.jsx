import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  return (
    <button
    //   onClick={(e) => {
    //     e.preventDefault();
    //     setDarkMode((prev) => !prev);
    //   }}
    >
      {/* <p className={`${darkMode ? "text-white" : "text-black"}`}> */}
      <p>
        {/*darkMode ? <MdLightMode /> : <MdDarkMode />*/}
        <MdLightMode />
        <MdDarkMode />
        darkModeSwitch
      </p>
    </button>
  );
}
