const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json()); //to accept json data

connectDB();

app.get("/", (req, res) => {
  res.send("API is running sucessfully");
});
app.use(notFound);
app.use(errorHandler);

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`Server is started on PORT ${PORT}`.yellow.bold));
