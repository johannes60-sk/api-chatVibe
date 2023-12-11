const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://api-chat-vibe-f5akk5tb8-johannes60-sk.vercel.app');
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;