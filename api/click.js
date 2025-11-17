// api/click.js
let clickCount = 0; // biến lưu số click hiện tại

export default function handler(req, res) {
  if (req.method === "GET") {
    // Lấy số click hiện tại
    res.status(200).json({ count: clickCount });
  } else if (req.method === "POST") {
    // Tăng số click
    clickCount += 1;
    res.status(200).json({ count: clickCount });
  } else if (req.method === "DELETE") {
    // Reset số click về 0
    clickCount = 0;
    res.status(200).json({ count: clickCount });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
