function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  // need to return two arrays by borrowed status
  // one books.borrows.returned === true
  // one books.borrows.returned === false
  // books is an array, book.borrows is an array
  const returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  const notReturnedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  let result = [[...notReturnedBooks], [...returnedBooks]];
  return result;
}

function getBorrowersForBook(book, accounts) {
  // accounts[i].id === book.borrows.id
  // should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provied book's borrows array
  // each account object should include the returned entry from object in the borrows array
  // slice(0, 10)
  const final = []; // initialize empty array
  const bookBorrow = book.borrows; // book.borrows is an array
  const loop = bookBorrow.forEach((borrow) => { // loop through book.borrows array
    const findMatch = accounts.find((account) => account.id === borrow.id); // find account.id to match borrow.id after looping through book.borrows array
    const borrowers = findMatch; // store results in borrowers
    borrowers['returned'] = borrow.returned;
    final.push(borrowers);
  });
  return final.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
