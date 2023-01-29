import express from "express";

const PORT = process.env.PORT || "3000";
const app = express();

// some comment 1

app.get("/", (req, res) => res.end("Hello world !"));

app.listen(PORT, () => console.log("App is running on port:", PORT));
