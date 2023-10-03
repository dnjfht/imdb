"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong</h1>
      <button>Try again</button>
    </div>
  );
}
