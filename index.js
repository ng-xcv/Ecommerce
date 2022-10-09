const fs = require("fs");
const path = require("path");
const cors = require("cors");
const https = require("https");
require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const app = express();

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

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(express.static(path.join(__dirname, "/admin/build")));

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
   res.sendFile(path.join(__dirname, "/admin/build", "index.html"));
});

mongoose
   .connect(process.env.URI, { useNewUrlParser: true })
   .then(() => console.log("\nDatabase connected successfully !"))
   .catch((err) => console.log(err));

// const httpsServer = https.createServer(
//    {
//       key: fs.readFileSync(
//          "/etc/letsencrypt/live/ecommerce.faytek.net/privkey.pem"
//       ),
//       cert: fs.readFileSync(
//          "/etc/letsencrypt/live/ecommerce.faytek.net/fullchain.pem"
//       ),
//    },
//    app
// );

// httpsServer.listen(process.env.PORT, function () {
//    console.log(`\nBackend server is running on ${process.env.PORT} :)`);
// });

app.listen(process.env.PORT, () => {
   console.log(`\nBackend server is running on ${process.env.PORT} :)`);
});
