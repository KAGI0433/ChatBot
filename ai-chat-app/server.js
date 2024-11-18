const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware for parsing JSON request bodies

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "JoeMan@12",
  database: "chat_app", // Replace with your database name
});

// Test database connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Root route
app.get('/', (req, res) => {
  res.json("From ai-chat-app side");
});

// Route to save a chat
app.post('/chats', (req, res) => {
  const { userMessage, botMessage } = req.body;
  const sql = "INSERT INTO chats (user_message, bot_message) VALUES (?, ?)";
  db.query(sql, [userMessage, botMessage], (err, result) => {
    if (err) {
      console.error("Error saving chat:", err);
      return res.status(500).json({ error: "Failed to save chat" });
    }
    res.status(200).json({ message: "Chat saved successfully!" });
  });
});

// Route to fetch all chat history
app.get('/chats', (req, res) => {
  const sql = "SELECT * FROM chats ORDER BY id DESC";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching chat history:", err);
      return res.status(500).json({ error: "Failed to fetch chat history" });
    }
    res.status(200).json(data);
  });
});

// Start server
app.listen(8081, () => {
  console.log("Listening on port 8081...");
});
