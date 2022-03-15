/**
 * Récupérer un élément par son identifiant
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
 */
const titleElement = document.getElementById("title");

/**
 * Modification du contenu texte d'un élément
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
 */
titleElement.innerText = "Au revoir...";

/**
 * Récupère tous les éléments qui ont une classe "paragraph"
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
 */
const paragraphs = document.getElementsByClassName("paragraph");

for (let index = 0; index < paragraphs.length; index++) {
  /**
   * Récupère un élément d'une collection HTML
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/item
   */
  const paragraph = paragraphs.item(index);
  paragraph.innerText = "Override";
}

// Récupere une image via son identfiant
const catImage = document.getElementById("cat");

// Récupère la valeur d'un attribut
console.log(catImage.attributes.getNamedItem("width").value);
