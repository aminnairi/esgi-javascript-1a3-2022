const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const todoInputValue = todoInput.value;
  const todoListItem = document.createElement("li");
  const todoListItemText = document.createElement("span");
  const todoListItemRemoveButton = document.createElement("button");

  todoListItemText.innerText = todoInputValue;
  todoListItemRemoveButton.innerText = "Remove";

  todoListItem.appendChild(todoListItemText);
  todoListItem.appendChild(todoListItemRemoveButton);

  todoList.appendChild(todoListItem);
});

// Supprimer un élément de la todo-list
// Vider l'input de nouvel todo
// Remettre le focus automatiquement sur l'input après un clic sur le bouton Add
// Bonus : un bouton modifier
// Modification : input à la place du span avec mon nouveau texte
// Modification : button save pour sauvegarder les modifications
// Modification : button cancel pour annuler les modifications
