const express = require("express");
const userRouter = require("./routes/api/users");
const logger = require("../middleware/logger");
const { PORT } = require("./config");

const app = express();
app.use(logger);
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("App is running on port:", PORT));
