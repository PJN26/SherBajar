require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URI;

const connectDb = async (uri) => {
  const conn = await mongoose.connect(uri);
  console.log(`Mongo db connected on ${conn.connection.host}`);
};

app.listen(PORT, async () => {
  await connectDb(uri);
  console.log(`app is listening on PORT ${PORT}`);
});
