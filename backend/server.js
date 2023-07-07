const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
dotenv.config();

const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("API is running sucessfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:_id", (req, res) => {
  const singleChat = chats.find((c) => c.id === req.params.id);
  res.send(singleChat);
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, console.log(`Server is started on PORT ${PORT}`.yellow.bold));
