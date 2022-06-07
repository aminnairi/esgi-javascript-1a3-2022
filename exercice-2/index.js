/* eslint-disable */
"use strict";

// À faire : afficher un chargement à l'écran tant que la requête n'est pas arrivé (utiliser le "throttling" dans la console de développeur pour simuler une connexion lente)
// À faire : afficher une image correspondant aux conditions météorologiques actuelles (soleil s'il fait beau, pluie s'il pleut, ...)
// À faire : Pouvoir annuler une requête envoyée au serveur OpenWeatherMap et afficher l'erreur d'annulation de requête
// À faire : Afficher toutes les erreurs (annulation, erreur de réseau, erreur JavaScript, ...)

document.getElementById("weather").addEventListener("submit", function(event) {
  const request = new XMLHttpRequest();

  event.preventDefault();

  request.addEventListener("load", function() {
    const xmlResponse = request.responseXML;
    const current = xmlResponse.children[0];
    const temperature = current.children[1];
    const temperatureAttribute = temperature.attributes.getNamedItem("value");
    const temperatureValue = temperatureAttribute.value;

    document.getElementById("output").innerText = temperatureValue + "°C";
  });

  request.open("GET", "https://api.openweathermap.org/data/2.5/weather?units=metric&mode=xml&q=" + document.getElementById("city").value + "&appid=f31995fb1e1d69ac2f5d2053ca040a3b");
  request.send();
});
