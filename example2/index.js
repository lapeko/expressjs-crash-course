const express = require("express");
const logger = require("../middleware/logger");
const { PORT } = require("./config");
const users = require("./users");

const app = express();

app.use(logger);
app.get("/api/users", (req, res) => res.json(users));

app.listen(PORT, () => console.log("App is running on port:", PORT));
