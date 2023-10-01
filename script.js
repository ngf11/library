const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = "Not Read";
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
      <p>by<span class ="spanAuthor"> ${book.author}</span></p>
      <p>Have you read this? click to toggle</p>
      <button class="readBtn bnt">Read</button>
     `;
    const readButton = card.querySelector(".readBtn");
    const readStatus = card.querySelector(".read-status");
    let isOriginalStyle = true; //.changeBtn

    readButton.addEventListener("click", () => {
      if (isOriginalStyle) {
        readButton.classList.remove("bnt");
        readButton.classList.add("changeBtn");
        readButton.textContent = "Not Read";
        book.read = "Not Read";
      } else {
        readButton.classList.remove("changeBtn");
        readButton.classList.add("bnt");
        readButton.textContent = "Read";
        book.read = "Read";
      }
      isOriginalStyle = !isOriginalStyle;
    });

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
  // const bookRead = document.querySelector(
  //   'input[name="read-type"]:checked'
  // ).value;
  const newBook = new Book(bookName, author);
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
