const express = require("express");
const { sequelize, connectToDb } = require("./config/db");
const bodyParser = require("body-parser");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const brandRoute = require("./routes/brandRoute");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/products", productRoute);
app.use("/user", userRoute);
app.use("/brands", brandRoute);

app.get("/", (request, response) => {
  response.send("<h1>Home</h1>");
});

app.use("/images", express.static("./images"));

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectToDb();
});
