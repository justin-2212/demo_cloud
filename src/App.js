import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Lấy số click khi load app
  useEffect(() => {
    const fetchClick = async () => {
      const res = await fetch("/api/click");
      const data = await res.json();
      setCount(data.count);
    };
    fetchClick();
  }, []);

  // Click button → tăng số click
  const handleClick = async () => {
    const res = await fetch("/api/click", { method: "POST" });
    const data = await res.json();
    setCount(data.count);
  };

  // Reset số click về 0
  const handleReset = async () => {
    const res = await fetch("/api/click", { method: "DELETE" });
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Demo SaaS Cloud Computing</h1>
      <p>Số lần click hiện tại: {count}</p>
      <button onClick={handleClick} style={{ marginRight: "10px" }}>
        Click Me!
      </button>
      <button onClick={handleReset}>Reset Click</button>
      <p>API serverless chạy trên Vercel</p>
    </div>
  );
}

export default App;
