const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://chat-vibe-three.vercel.app');
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;

