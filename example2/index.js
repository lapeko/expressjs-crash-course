const express = require("express");
const logger = require("../middleware/logger");
const { PORT } = require("./config");
const users = require("./users");

const app = express();

app.use(logger);
app.get("/api/users", (req, res) => res.json({ data: users }));
app.get("/api/users/:id", (req, res) => {
  const user = users.filter(({ id }) => req.params.id == id)[0];
  if (!user) return res.status(404).json({ data: null });
  res.json({ data: user });
});

app.listen(PORT, () => console.log("App is running on port:", PORT));
