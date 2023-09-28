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

//Dummy Books
const beHereNow = new Book("Be Here now", "Ram Dass", "In-progress");
const dailyStoic = new Book("Daily Stoic", "Ryan Holiday", "In-progress");
const youCantHurtMe = new Book(
  "You can't hurt me",
  "David Goggins",
  "In-progress"
);
const fiveRings = new Book(
  "The Book of Five Rings",
  "Miyamoto Musashi",
  "In-progress"
);

const body = document.body;
const div = document.createElement("div");
div.classList.add("container");
body.append(div);

function renderLibrary() {
  const libraryContainer = document.querySelector(".container");
  libraryContainer.innerHTML = ""; // Clear the container before rendering

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-index", index);
    card.innerHTML = `
    <button class ="deleteBnt bnt">Delete</button>
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p>Read: ${book.read}</p>
     
    
    `;
    libraryContainer.appendChild(card);
  });
}

renderLibrary();

//Add new book button and modal
const addBookButton = document.querySelector(".new-book");
const closeButton = document.querySelector(".close-bnt");
const submitButton = document.querySelector(".add");
const modal = document.querySelector(".modal");

addBookButton.addEventListener("click", () => {
  modal.showModal();
});
closeButton.addEventListener("click", () => {
  modal.close();
});
submitButton.addEventListener("click", () => {
  modal.close();
});

//headeling from post
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookName = document.getElementById("book-name").value;
  const author = document.getElementById("author-name").value;
  const bookRead = document.querySelector(
    'input[name="read-type"]:checked'
  ).value;
  const newBook = new Book(bookName, author, bookRead);
  renderLibrary();
});

//Delete button
div.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBnt")) {
    const card = event.target.closest(".card");
    if (card) {
      const index = card.getAttribute("data-index");
      if (index !== null) {
        // Convert the index to a number and remove the corresponding book
        myLibrary.splice(parseInt(index), 1);
        renderLibrary();
      }
    }
  }
});
