const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/connectDb");
const bodyParser = require("body-parser");

//config dot env file
dotenv.config();

//database connection
connectDb();
//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
//user route
app.use("/api/v1/users", require("./routes/userRoutes"));
//transaction route
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//port
const port = 8083;

//listen server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
