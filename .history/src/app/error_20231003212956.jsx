"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <div></div>;
}
