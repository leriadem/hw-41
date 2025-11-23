import React, { Suspense } from "react";
import MessageComponent from "./components/MessageComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function fetchMessageWithDelay(ms = 1500, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Серверна помилка: не вдалося отримати дані."));
      } else {
        resolve("Привіт! Це повідомлення з Promise, обробленого через use().");
      }
    }, ms);
  });
}

export default function App() {
  
  const promise = fetchMessageWithDelay(2000, false);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>HW 41 - Робота з хуком use() в React</h1>

      <ErrorBoundary>
        <Suspense fallback={<div>Завантаження даних…</div>}>
          <MessageComponent promise={promise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

