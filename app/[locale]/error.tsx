"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Щось пішло не так 😢</h2>
      <p>{error.message}</p>
      <button onClick={reset} style={{ marginTop: "1rem" }}>
        Спробувати ще раз
      </button>
    </div>
  );
}
