import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Demo SaaS Cloud Computing</h1>
      <p>Ứng dụng này minh họa SaaS: chạy trực tiếp trên cloud, mọi người có thể truy cập từ trình duyệt.</p>
      
      <h2>Button click demo</h2>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>

      <h3 style={{ marginTop: "40px" }}>Lý thuyết áp dụng:</h3>
      <ul style={{ textAlign: "left", display: "inline-block" }}>
        <li>Không cần cài đặt phần mềm (SaaS)</li>
        <li>Mọi người truy cập trực tiếp từ cloud (URL public)</li>
        <li>Triển khai nhanh, tiết kiệm chi phí</li>
      </ul>
    </div>
  );
}

export default App;
