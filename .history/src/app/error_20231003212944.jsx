"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, []);

  return <div></div>;
}
