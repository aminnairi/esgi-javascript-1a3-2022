// Fonction qui prend des arguments
function add(first, second) {
  // Retour de la valeur
  return first + second;
}

// Les arguments qui ne sont passés au moment de l'appe
// prennent la valeur undefined
function setLight(lightStatus) {
  return lightStatus;
}

// Argument par défaut
function sayHello(context = "world") {
  return `Hello, ${context}!`;
}

// Une fonction variadique
function add(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));
console.log(add());
