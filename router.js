const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://chat-vibe-three.vercel.app/');
  res.header('Access-Control-Allow-Methods', 'GET, POST'); // Ajout de méthodes autorisées
  res.header('Access-Control-Allow-Credentials', true); // Autorise l'utilisation de cookies et d'informations d'identification
  // console.log('Request Headers:', req.headers);
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;

