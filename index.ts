import express from "express";
import dotenv from "dotenv";
import bookRouter from "./routes/booksRouter.js"
import { loggerMiddleware } from "./middleware/logger.js";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.use(loggerMiddleware)

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/health", (req, res) => {
    res.status(200).send("OK")
})

app.use("/books", bookRouter)

app.use((req, res) => {
    res.status(404).send("You requested something does not exist :(");
})

app.listen(PORT, () => {
    console.log(`Server working on port ${PORT} and host: http://localhost:${PORT}`);
})
