const age = 18;

if (age > 21) {
  // ....
} else if (age < 18) {
  // ...
} else {
  // ...
}

const role = "ADMINISTRATOR";

switch (role) {
  case "ADMINISTRATOR":
    console.log("administrator");
    break;

  case "USER":
  case "ANONYMOUS":
    console.log("utilisateur");
    break;

  default:
    console.log("Inconnu");
    break;
}

for (let index = 0; index < 10; index++) {
  console.log(index);
}
