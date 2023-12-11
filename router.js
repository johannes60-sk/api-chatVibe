const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://api-chat-vibe.vercel.app');
  console.log('Request Headers:', req.headers);
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;

