import express from 'express';
import { getAllBooks, createNewBook, getBook, updateBook, deleteBook } from '../controllers/booksController.js';
const router = express.Router()

router.get("/", getAllBooks)
router.get("/:id", getBook)
router.post("/", createNewBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

export default router