const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://chat-vibe-9ikl7r8tc-johannes60-sk.vercel.app');
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;

