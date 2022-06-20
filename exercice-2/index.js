/* eslint-disable */
"use strict";

// Fait : afficher un chargement à l'écran tant que la requête n'est pas arrivé (utiliser le "throttling" dans la console de développeur pour simuler une connexion lente)
// Fait : afficher une image correspondant aux conditions météorologiques actuelles (soleil s'il fait beau, pluie s'il pleut, ...)
// Fait : Afficher toutes les erreurs (annulation, erreur de réseau, erreur JavaScript, ...)
// Fait : Pouvoir annuler une requête envoyée au serveur OpenWeatherMap et afficher l'erreur d'annulation de requête

const loaderElement = document.getElementById("loader");
const iconContainerElement = document.getElementById("icon-container");
const outputElement = document.getElementById("output");
const errorElement = document.getElementById("error");
const cancelButtonElement = document.getElementById("cancel");

let request;

cancelButtonElement.addEventListener("click", function() {
  request.abort();
});

document.getElementById("weather").addEventListener("submit", function(event) {
  request = new XMLHttpRequest();

  event.preventDefault();

  errorElement.innerText = "";

  request.addEventListener("error", function() {
    errorElement.innerText = "An error occurred, please try again later.";
  });

  request.addEventListener("abort", function() {
    errorElement.innerText = "The request has been aborted by the user.";
  });

  request.addEventListener("load", function() {
    const xmlResponse = request.responseXML;
    const current = xmlResponse.children[0];
    const temperature = current.children[1];
    const weatherConditionElement = xmlResponse.getElementsByTagName("weather")[0];
    const temperatureAttribute = temperature.attributes.getNamedItem("value");
    const temperatureValue = temperatureAttribute.value;
    const iconElement = document.createElement("img");

    iconElement.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherConditionElement.getAttribute("icon") + "@2x.png");

    if (iconContainerElement.children.length > 0) {
      for (const child of iconContainerElement.children) {
        child.remove();
      }
    }

    outputElement.innerText = temperatureValue + "°C";
    iconContainerElement.appendChild(iconElement);
  });

  request.addEventListener("loadstart", function() {
    loaderElement.classList.add("loader");
    loaderElement.classList.remove("loader--hidden");
  });

  request.addEventListener("loadend", function() {
    loaderElement.classList.add("loader--hidden");
    loaderElement.classList.remove("loader");
  });

  request.open("GET", "https://api.openweathermap.org/data/2.5/weather?units=metric&mode=xml&q=" + document.getElementById("city").value + "&appid=f31995fb1e1d69ac2f5d2053ca040a3b");
  request.send();
});
