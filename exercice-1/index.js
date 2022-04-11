// Récupère notre formulaire d'ajout de todo
const todoForm = document.getElementById("todo-form");

// Récupère notre champ de texte correspondant au texte de notre todo
const todoInput = document.getElementById("todo-input");

// Récupère notre liste de todos (pour l'instant vide)
const todoList = document.getElementById("todo-list");

// Récupère notre conteneur d'erreur
const errorContainer = document.getElementById("error");

// À chaque fois que l'on soumet le formulaire d'ajout d'une nouvelle todo, exécute la fonction ci-dessous
todoForm.addEventListener("submit", function(event) {
  // Empêche que le navigateur ne recharge la page (et nous fasse perdre toutes nos todos)
  event.preventDefault();

  // Récupère la valeur du champ de texte
  const todoInputValue = todoInput.value;

  if (todoInputValue.trim().length === 0) {
    // On ajoute un message d'erreur
    errorContainer.innerText = "Todo cannot be empty";

    // On change la couleur en rouge
    errorContainer.style.color = "red";
    return;
  }

  // On supprime le message d'erreur
  errorContainer.innerText = "";

  // On change la couleur en noir
  errorContainer.style.color = "black";

  // Créé un nouveau <li></li>
  const todoListItem = document.createElement("li");

  // Créé un nouveau <span></span>
  const todoListItemText = document.createElement("span");

  // Créé un nouveau <button></button>
  const todoListItemRemoveButton = document.createElement("button");

  // Paramètre la valeur du texte de notre nouvel <li></li>
  todoListItemText.innerText = todoInputValue;

  // Texte d'affichage de notre bouton de suppression
  todoListItemRemoveButton.innerText = "Remove";

  // Ajoute le <span></span> de notre <li></li>
  todoListItem.appendChild(todoListItemText);

  // Ajoute le <button></button> à notre <li></li>
  todoListItem.appendChild(todoListItemRemoveButton);

  // Ajoute le <li></li> à notre <ul></ul>
  todoList.appendChild(todoListItem);

  // Lorsque l'on clique sur le bouton de suppression
  todoListItemRemoveButton.addEventListener("click", function() {
    // Supprime un élément de liste de notre liste de todo
    todoList.removeChild(todoListItem);

    // Redonne le focus à l'élément (le champ de texte)
    todoInput.focus();
  });

  // Réinitialise le formulaire
  todoForm.reset();

  // Redonne le focus à l'élément (le champ de texte)
  todoInput.focus();
});

// [DONE] Supprimer un élément de la todo-list
// [DONE] Vider l'input du nouveau todo
// [DONE] Remettre le focus automatiquement sur l'input après un clic sur le bouton Add
// [DONE] Remettre le focus sur le champ de texte lorsque l'on supprime un élément
// [DONE] Quand j'essaie de mettre un todo vide, un message d'erreur doit apparaitre (en couleur rouge)
// [DONE] Quand j'ajoute une todo, le message d'erreur doit disparaitre
// Bonus : un bouton modifier
// Bonus : Modification : input à la place du span avec mon nouveau texte
// Bonus : Modification : button save pour sauvegarder les modifications
// Bonus : Modification : button cancel pour annuler les modifications
// Bonus : trier les todos
