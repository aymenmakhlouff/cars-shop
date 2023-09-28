const express = require("express");
const app = express();

const brandRouter = require("./routes/brands.router")
const carRouter = require("./routes/cars.router")
const categoryRouter = require("./routes/categories.router")
const colorRouter = require("./routes/colors.router")
const historiqueRouter = require("./routes/historique.router")
const userRouter = require("./routes/users.router")
require("./database-mysql/connection.database.js")

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json())

// app.use(express.urlencoded({ extended: true }));

app.use("/api/shop/brand", brandRouter);
app.use("/api/shop/car", carRouter);
app.use("/api/shop/category", categoryRouter);
app.use("/api/shop/color", colorRouter);
app.use("/api/shop/historique", historiqueRouter);
app.use("/api/shop/user", userRouter);

let port = 3001;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
