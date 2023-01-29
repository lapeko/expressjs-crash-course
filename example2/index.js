const express = require("express");
const users = require("./users");
const PORT = process.env.PORT || "3000";

const app = express();

app.get("/users", (req, res) => res.json(users));

app.listen(PORT, () => console.log("App is running on port:", PORT));
