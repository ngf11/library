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
const youCantHurtMe = new Book("You can't hurt me", "David Goggins", true);
const fiveRings = new Book("The Book of Five Rings", "Miyamoto Musashi", true);
const body = document.body;
const div = document.createElement("div");
div.classList.add("container");
body.append(div);

myLibrary.forEach((book) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = `${book.title}\nby ${book.author}\n\nRead: ${book.read}`;
  div.appendChild(card);
});

//Add new book button and modal
const addBookButton = document.querySelector(".new-book");
const closeButton = document.querySelector(".close-bnt");
const modal = document.querySelector(".modal");

addBookButton.addEventListener("click", () => {
  modal.showModal();
});
closeButton.addEventListener("click", () => {
  modal.close();
});
