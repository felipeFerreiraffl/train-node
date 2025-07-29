import express from "express";
import errorHandler from "./middleware/errorHandler.js";
const app = express();
import usersRouter from "./routes/users.js";

app.use(express.json());
app.use("/api/users", usersRouter);
app.use(errorHandler);

export default app;
