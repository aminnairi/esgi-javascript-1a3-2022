let request = new XMLHttpRequest();

const fetchArticlesButton = document.getElementById("fetch-articles");
const cancelButton = document.getElementById("cancel");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

loader.style.visibility = "hidden";

cancelButton.disabled = true;

function fetchArticles() {
  const tableBody = document.getElementById("table-body");

  //fetchArticlesButton.setAttribute("disabled", true);
  fetchArticlesButton.disabled = true;
  loader.style.visibility = "visible";
  cancelButton.disabled = false;
  error.innerHTML = "";
  tableBody.innerHTML = "";

  function onResponse() {
    const articles = request.responseXML.children[0];
    const allArticles = articles.children;

    for (const article of allArticles) {
      const title = article.children[0];
      const description = article.children[2];
      const content = article.children[3];

      const titleContent = title.textContent.trim();
      const descriptionContent = description.textContent.trim();
      const imageUrl = content.getAttribute("url");

      const tableRow = document.createElement("tr");
      const titleTableCell = document.createElement("td");
      const descriptionTableCell = document.createElement("td");
      const imageTableCell = document.createElement("td");
      const imagePreview = document.createElement("img");

      titleTableCell.innerText = titleContent;

      descriptionTableCell.innerText = descriptionContent;

      imagePreview.src = imageUrl;
      imagePreview.style.height = "50px";
      imagePreview.style.width = "100px";
      imagePreview.style.cursor = "button";
      imagePreview.addEventListener("click", function() {
        window.open(imageUrl);
      });

      imageTableCell.appendChild(imagePreview);

      tableRow.appendChild(titleTableCell);
      tableRow.appendChild(descriptionTableCell);
      tableRow.appendChild(imageTableCell);

      tableBody.appendChild(tableRow);

      fetchArticlesButton.disabled = false;
      loader.style.visibility = "hidden";
      cancelButton.disabled = true;
    }
  }

  request.addEventListener("load", onResponse);

  request.open("GET", "./index.xml");
  request.send();
}

function onCancelRequest() {
  request.abort();
  fetchArticlesButton.disabled = false;
  cancelButton.disabled = true;
  loader.style.visibility = "hidden";
}

fetchArticlesButton.addEventListener("click", fetchArticles);

cancelButton.addEventListener("click", onCancelRequest);

request.addEventListener("abort", function() {
  error.innerText = "La requête a été annulée";
});
