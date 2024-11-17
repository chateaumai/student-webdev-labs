const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((books) => {
      const loading = document.querySelector("#loading");
      loading.remove();

      books.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.className = "mb-3 mx-auto";
        bookElement.style.maxWidth = "400px";
        bookElement.innerHTML = `
          <div>
            <h5 class="card-title">${book.name}</h5>
            <p class="card-text">
              by ${book.authors.join(", ")}<br>
              ${new Date(book.released).getFullYear()}<br>
              ${book.numberOfPages} pages
            </p>
          </div>
        `;
        app.appendChild(bookElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
};
fetchData(url);
