const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

const directoryToServe = "frontend";
const port = 3443;

app.use("/", express.static(path.join(__dirname, "..", directoryToServe)));

const httpsOptions = {
   cert: fs.readFileSync(path.join(__dirname, "ssl", "server.crt")),
   key: fs.readFileSync(path.join(__dirname, "ssl", "server.key")),
};

//Importing routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const stripeRoute = require("./routes/stripe");

//Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);
app.use("/api/checkout", stripeRoute);

mongoose
   .connect(process.env.URI, { useNewUrlParser: true })
   .then(() => console.log("\nDatabase connected successfully !"))
   .catch((err) => console.log(err));

https
   .createServer(
      {
         key: fs.readFileSync("server.key"),
         cert: fs.readFileSync("server.cert"),
      },
      app
   )
   .listen(process.env.PORT, function () {
      console.log(`\nBackend server is running on ${process.env.PORT} :)`);
   });
