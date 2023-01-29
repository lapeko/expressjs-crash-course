import express from "express";

const PORT = process.env.PORT || "3000";

// comment to revert it later

const app = express();

app.get("/", (req, res) => res.end("Hello world !"));

app.listen(PORT, () => console.log("App is running on port:", PORT));
