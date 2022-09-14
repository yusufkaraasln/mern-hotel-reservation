const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};


 
 

app.use(express.json());

connect();


app.use("/api/auth", require("./router/auth"))
app.use("/api/hotels", require("./router/hotels"))
app.use("/api/rooms", require("./router/rooms"))
app.use("/api/users", require("./router/users"))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => console.log("Listening on port 8080!"));
