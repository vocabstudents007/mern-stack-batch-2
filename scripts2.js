let books = [
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        year: 2011,
        genres: ["History", "Anthropology"],
        available: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genres: ["Fiction", "Classic"],
        available: false
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        year: 1988,
        genres: ["Science", "Non-fiction"],
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genres: ["Dystopian", "Political Fiction"],
        available: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genres: ["Fiction", "Classic"],
        available: false
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genres: ["Fiction", "Classic"],
        available: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genres: ["Fantasy", "Adventure"],
        available: true
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genres: ["Romance", "Classic"],
        available: false
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        genres: ["Fantasy", "Adventure"],
        available: true
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        genres: ["Fiction", "Adventure"],
        available: true
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        year: 2006,
        genres: ["Post-apocalyptic", "Fiction"],
        available: true
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        year: 2011,
        genres: ["Psychology", "Non-fiction"],
        available: false
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        year: 2005,
        genres: ["Crime", "Thriller"],
        available: true
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        year: 2005,
        genres: ["Historical Fiction", "Young Adult"],
        available: true
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        year: 2003,
        genres: ["Fiction", "Drama"],
        available: false
    }
];


// using reduce calculate the total number of available books
let totalAvailableBooks = books.reduce((count, book) => {
    return count + (book.available ? 1 : 0);
}, 0);

console.log("Total available books:", totalAvailableBooks);
// Example of using forEach to log book titles
books.forEach(book => {
    console.log(book.title);
}); 

// Example of using map to create an array of book titles
let bookTitles = books.map(book => book.title);
console.log("Book titles:", bookTitles);

// Example of using filter to get books published after 2000
let recentBooks = books.filter(book => book.year > 2000);
console.log("Books published after 2000:", recentBooks);

// Example of using find to get the first available book
let firstAvailableBook = books.find(book => book.available);
console.log("First available book:", firstAvailableBook);

// Example of using some to check if there are any books available
let hasAvailableBooks = books.some(book => book.available);
console.log("Are there any available books?", hasAvailableBooks);

// Example of using every to check if all books are available
let allBooksAvailable = books.every(book => book.available);
console.log("Are all books available?", allBooksAvailable);