const express = require('express');
const http = require("http");
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// register the route
app.use("/api/auth", authRoutes);

const server = http.createServer(app);

// Kết nối tới MongoDB
mongoose
  .connect('mongodb://127.0.0.1/examOnline')
  .then(() => {
    server.listen(5000, "0.0.0.0", () => {
      console.log(`SERVER STARTED ON ${5000}.....!`);
    });
  })
  .catch((err) => {
    console.log("database connection failed. Server not started");
    console.error(err);
  });
