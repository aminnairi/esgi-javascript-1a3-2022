// Récupérer un élément par son identifiant
const titleElement = document.getElementById("title");

// Modification du contenu texte d'un élément
titleElement.innerText = "Au revoir...";

// Récupère tous les éléments qui ont une classe "paragraph"
const paragraphs = document.getElementsByClassName("paragraph");

for (let index = 0; index < paragraphs.length; index++) {
  const paragraph = paragraphs.item(index);
  paragraph.innerText = "Override";
}

// Récupere une image via son identfiant
const catImage = document.getElementById("cat");

console.log(catImage.attributes.getNamedItem("width").value);
