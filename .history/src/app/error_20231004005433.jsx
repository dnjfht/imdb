"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="max-w-6xl sm:mx-auto p-4 space-y-4">
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
