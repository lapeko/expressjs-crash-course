const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("../middleware/logger");
const usersRouter = require("./routes/api/users");
const users = require("./users");
const { PORT } = require("./config");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.render("index", { users });
});

app.listen(PORT, () => console.log("App is running on port:", PORT));
