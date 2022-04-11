const tableBody = document.getElementById("table-body");

/**
 * Le constructeur de requêtes asynchrones
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
const request = new XMLHttpRequest();

/**
 * Permet d'écouter l'événement permettant de savoir si la requête a bien été reçue ou non
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget
 */
request.addEventListener("load", function() {
  const xmlDocument = request.responseXML;
  const champions = xmlDocument.children[0];

  // afficher tout sauf les compétences
});

/**
 * Paramètre la requête avant son envoie avec une méthode HTTP et une URL (serveur distant ou local)
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
 */
request.open("GET", "../chapitre-14/lol.xml");

/**
 * L'instruction permettant effectivement d'envoyer la requête asynchrone au serveur cible
 */
request.send();
