/* eslint-disable */
"use strict";

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
