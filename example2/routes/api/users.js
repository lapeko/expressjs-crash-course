const express = require("express");
const users = require("../../users");

const router = express.Router();

router.get("/", (req, res) => res.json({ data: users }));
router.get("/:id", (req, res) => {
  const user = users.filter(({ id }) => req.params.id == id)[0];
  if (!user) return res.status(404).json({ data: null });
  res.json({ data: user });
});

module.exports = router;
