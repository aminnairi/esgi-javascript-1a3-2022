const title = document.getElementById("title");
const redTextButton = document.getElementById("red-text-button");
const initialTextButton = document.getElementById("initial-text-button");

redTextButton.addEventListener("click", function() {
  title.style.color = "red";
  title.style.marginTop = "50px";
});

initialTextButton.addEventListener("click", function() {
  title.style.color = "black";
  title.style.marginTop = "0px";
});
