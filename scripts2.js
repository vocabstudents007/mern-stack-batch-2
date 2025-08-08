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

// Using filter to get available books
// Using map to get the titles of available books
// Using reduce to get the total number of available books
// group by year and list the titles of books available in that year
// get all authors
// get all genres

// let authors = books.map(book => book.author);

// let genres = books.map(book => book.genres).flat();
let genres = books.flatMap(book => book.genres);

console.log(genres);

genres.forEach(genre =>{
    if(!uniqueGenres.includes(genre)){
        uniqueGenres.push(genre);
    }
})

console.log(uniqueGenres);
