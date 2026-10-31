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
}

const start = async () => {
  await connectDb(uri);
  app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
  });
};

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
