import React, { use } from "react";

export default function MessageComponent({ promise }) {
  
  const message = use(promise);

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        marginTop: "16px",
      }}
    >
      <h3>Отримане повідомлення:</h3>
      <p>{message}</p>
    </div>
  );
}
