const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
  addBookToLibrary(this);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const beHereNow = new Book("Be Here now", "Dam rass", false);
const dailyStoic = new Book("Daily Stoic", "Ryan Holiday", false);

const body = document.querySelector("body");
body.append(myLibrary);
