"use client";

import { useState } from "react";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
    ></button>
  );
}
