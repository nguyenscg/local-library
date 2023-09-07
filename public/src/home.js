function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // # that represents books current checked out of library
  // 1) loop through books
  // 2) loop through books.borrows array
  // 3) check for book.borrows.returned === false
  // 4) count++ every returned === false
  let total = 0;
  books.forEach((book) => book.borrows.forEach((borrow) => borrow.returned === false && total++));
  return total;
}

function getMostCommonGenres(books) {
  // returns an array containing five objects or fewer that represents the most common occuring genres, ordered from most common to least 
  // name key which represents genre
  // count key which represents number of times the genre occurs
  const results = []; // initialize empty array;
  for (const book of books) {
    if (results[book.genre] === undefined) {
      results[book.genre] = 1;
    }
    else {
      results[book.genre] += 1
    }
  }
  let sort = [];
  for (const [key, value] of Object.entries(results)) {
    sort.push({
      'name' : key,
      'count' : value
    });
  }
  sort.sort((a, b) => b.count - a.count)
  return sort.slice(0, 5) // return top 5
}

function getMostPopularBooks(books) {
  // returns an array containing five objects or fewer that represents the most popular books in the library. populariy is represented by the number of times a book has been borrowed
 // name key is title of the book
  // count key represents the nuber of times the book has been borrowed
  const bookTitles = books.map((book) => ({name:book.title, count:book.borrows.length}))
  bookTitles.sort((a, b) => b.count - a.count);
  return bookTitles.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  // books array and authors array
  // returns array containing five objects or fewer that represents the msot popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up he number of times those books have been borrowed
  // name key represents first and last name of the author
  // count key represents number of times the author's books have been borrowed
//   const authorId = authors.find((author) => author.id);
//   const authorName = `${authorId.name.first} ${authorId.name.last}`;
  
  const popAuthor = authors.map((author) => {
    const bookCount = books.filter((book) => book.authorId === author.id).reduce((total, book) => {
      total += book.borrows.length;
      return total;
    }, 0);
    const authorName = author.name.first + " " + author.name.last;
    return {name: authorName, count: bookCount}
  });
  return popAuthor.sort((a, b) => b.count - a.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
