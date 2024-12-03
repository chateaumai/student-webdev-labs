const url = "https://anapioficeandfire.com/api/books/";

// const app = document.querySelector('#books');
// app.style.paddingLeft = 0;
// const loading = document.querySelector('#loading');

// const addBookToDOM = (item) => {
//   console.log(item);
//   let element = document.createElement('div');
//   let title = document.createElement('h4');
//   let author = document.createElement('p');
//   let published = document.createElement('p');
//   let pages = document.createElement('p');

//   element.style.display = 'flex';
//   element.style.flexDirection = 'column';
//   element.style.alignItems = 'center';
//   element.style.marginTop = '20px';

//   title.textContent = item.name;
//   author.textContent = `by ${item.authors[0]}`;
//   published.textContent = item.released.substr(0, 4);
//   pages.textContent = `${item.numberOfPages} pages`;

//   element.append(title);
//   element.append(author);
//   element.append(published);
//   element.append(pages);

//   app.append(element);
// };

// const fetchData = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((item) => {
//         addBookToDOM(item);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       let li = document.createElement('li');
//       li.textContent = `An error occured. Please try again.`;
//       app.append(li);
//     })
//     .finally(() => {
//       app.removeChild(loading);
//     });
// };

// fetchData(url);

$("#books").css("paddingLeft", 0);

const addBookToDOM = (item) => {
  const $element = $("<div>").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  const $title = $("<h4>").text(item.name);
  const $author = $("<p>").text(`by ${item.authors[0]}`);
  const $published = $("<p>").text(item.released.substr(0, 4));
  const $pages = $("<p>").text(`${item.numberOfPages} pages`);

  $element.append($title, $author, $published, $pages);
  $("#books").append($element);
};

const fetchData = (url) => {
  $.ajax({
    url: url,
    method: "GET",
    success: (data) => {
      $.each(data, (index, item) => {
        addBookToDOM(item);
      });
    },
    error: (error) => {
      console.log(error);
      $("<li>").text("An error occurred. Please try again.").appendTo("#books");
    },
    complete: () => {
      $("#loading").remove();
    },
  });
};

$(document).ready(() => {
  fetchData(url);
});
