const express = require("express");
const users = require("../../users");

const router = express.Router();

router.get("/", (req, res) => res.json({ data: users }));

router.get("/:id", (req, res) => {
  const user = users.filter(({ id }) => req.params.id == id)[0];
  if (!user) return res.status(404).json({ data: null });
  res.json({ data: user });
});

router.post("/", (req, res) => {
  users.push({
    id: users[users.length - 1].id + 1,
    ...req.body,
    status: "active",
  });
  // res.send({ data: users });
  res.redirect("/");
});

router.put("/:id", (req, res) => {
  const user = users.filter(({ id }) => req.params.id == id)[0];
  if (!user) return res.status(404).send({ data: null });
  const { name, email } = req.body;
  user.name = name;
  user.email = email;
  res.send({ data: user });
});

module.exports = router;
