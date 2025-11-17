// api/click.js
let clickCount = 0; // biến in-memory, tạm thời

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ count: clickCount });
  } else if (req.method === "POST") {
    clickCount += 1;
    res.status(200).json({ count: clickCount });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
