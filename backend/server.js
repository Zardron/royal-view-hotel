const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cors = require("cors");

// Routers
const authRouter = require("./routes/authRoutes");
const roomRouter = require("./routes/roomRoutes");

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/user", authRouter);
app.use("/api/room", roomRouter);

// Middleware
// Middlewares
app.use(notFound);
app.use(errorHandler);

dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
