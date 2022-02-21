const user = {
  firstName: "Amin",
  lastName: "NAIRI",
  email: "anairi@esgi.fr",
  age: 28,
  isAdministrator: false
};

// 12
// console.log(user.age);

// Ajout d'une nouvelle propriété
// user.grade = 12;

// Modification d'une valeur d'une propriété
// user.age = 8;

// Supprimer une propriété d'un objet
// delete user.age;

// Boucle sur toutes les propriétés d'un objet
for (const propertyName in user) {
  // Propriété calculée
  const value = user[propertyName];
  console.log(`Propriété: ${propertyName}, valeur: ${value}`);
}
