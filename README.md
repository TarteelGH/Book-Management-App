# Book-Management-App 📚
## 
‏
### Design and develop a REST API using Express.js and TypeScript for a book management system. The API should allow users to perform CRUD operations on books stored in a JSON file and provide additional functionality for querying books by name or publishing year. The API should support the following functionalities:

- Retrieve all books: Implement a GET route to fetch all books from the JSON file and return them as a JSON response.
- Retrieve a specific book: Implement a GET route that accepts a book ID as a path parameter and returns the corresponding book details from the JSON file.
- Add a new book: Implement a POST route that accepts book details in the request body and adds the book to the JSON file. The route should validate the input data and handle any error.
- Update a book: Implement a PUT route that accepts a book ID as a path parameter and updated book details in the request body. The route should update the corresponding book in the JSON file.
- Delete a book: Implement a DELETE route that accepts a book ID as a path parameter and deletes the corresponding book from the JSON file.
- Query books by name: Implement a GET route that accepts a book name as a query parameter and returns a list of books matching the provided name from the JSON file.
- Query books by publishing year: Implement a GET route that accepts a publishing year as a query parameter and returns a list of books published in the provided year from the JSON file.

*Ensure that the API handles appropriate status codes and error handling for various scenarios. Consider implementing pagination and sorting options for the retrieve all books route.
Use Postman to test your APIs.*
