import Books from "../types/books";
import bookList from "../data/books.js";

const getAllBooks = ((req: Books.Request, res: Books.Response) => {
    //GET books by name
    const bookName = req.query.title
    if (bookName) {
        const books = bookList.filter((item) => {
            return item.title === bookName
        });
        if (books) {
            res.status(200).send(books)
        } else {
            res.status(404).send("No such book with this name")
        }
    }

    //GET book by publicationYear
    const bookPublicationYear = Number(req.query.publicationYear)
    if (bookPublicationYear) {
        const books = bookList.filter((item) => {
            return item.publicationYear === bookPublicationYear
        });
        if (books) {
            res.status(200).send(books)
        } else {
            res.status(404).send("No such book with this publication year")
        }
    }

    //with pagination
    if (!bookName && !bookPublicationYear) {
        const page = parseInt(req.query.page || '1');
        const pageSize = parseInt(req.query.pageSize || '10');
        const filteredItems = bookList.slice((page - 1) * pageSize, page * pageSize);

        res.send({
            page,
            pageSize,
            total: bookList.length,
            items: filteredItems
        })
    }
})

const getBook = ((req: Books.Request, res: Books.Response) => {
    const BookId = Number(req.params);
    const book = bookList.find((item) => item.id === BookId)
    if (book) {
        res.status(200).send(book)
    } else {
        res.status(404).send({ message: "Not found", success: false })
    }
})

const createNewBook = ((req: Books.Request, res: Books.Response) => {
    if (!req.body.title || !req.body.author) {
        res.status(400).send("Title and Author is required")
        return;
    }

    const newBook: Books.Item = {
        id: Date.now(),
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear
    }
    bookList.unshift(newBook);
    res.status(201).send("Book created successfully")
})

const updateBook = ((req: Books.Request, res: Books.Response) => {
    const BookId = Number(req.params.id)
    let BookIndex = 99999999;
    const book = bookList.find((item, index) => {
        BookIndex = index
        return item.id === BookId
    });

    if (book) {
        const updatedBook = {
            id: BookId,
            title: req.body.title,
            author: req.body.author,
            publicationYear: req.body.publicationYear
        }
        bookList[BookIndex] = updatedBook;
        res.status(200).send("Book updated successfully");
    } else {
        res.status(404).send("Book not found");
    }
})

const deleteBook = ((req: Books.Request, res: Books.Response) => {
    const BookId = Number(req.params.id)
    let BookIndex = 99999999;
    const book = bookList.find((item, index) => {
        BookIndex = index
        return item.id === BookId
    });

    if (book) {
        bookList.splice(BookIndex, 1)
        res.status(200).send("Book deleted successfully");
    } else {
        res.status(404).send("Book not found")
    }

})

export { getAllBooks, createNewBook, getBook, updateBook, deleteBook }