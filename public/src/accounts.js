// create a function called findAccountById that takes in two parameters: accounts and id
// accounts: An array of account objects
// id: A string ID of a single account object
// should return the account object that has the matching ID.
function findAccountById(accounts, id) {
  // use find method to find the account with matching id
  let findAccount = accounts.find((account) => account.id === id)
  return findAccount;
}

// create a function called sortAccountsByLastName that takes in a single parameter called accounts
function sortAccountsByLastName(accounts) {
  // use sort method to sort accounts by lastnames
  const sortAcc = [...accounts];
  sortAcc.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1)
  return sortAcc;
  
}

// create a function called getTotalNumberOfBorrows with two paramters: account and books
// books is an array and so is borrows
// account is an object
function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach((book) => book.borrows.forEach((borrow) => account.id === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
//   let booksOut = books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === account.id))
//   booksOut.forEach(book => book['author'] = authors.find(person => person.id === book.authorId))
//   return booksOut;
  let poss = books.filter((book) => book.borrows.some((borrow) => borrow.id === account.id && borrow.returned === false));
  poss.forEach((book) => book['author'] = authors.find((person) => person.id === book.authorId));
  return poss;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
