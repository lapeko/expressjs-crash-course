const express = require("express");
const bodyParser = require("body-parser");
const logger = require("../middleware/logger");
const userRouter = require("./routes/api/users");
const { PORT } = require("./config");

const app = express();
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("App is running on port:", PORT));
