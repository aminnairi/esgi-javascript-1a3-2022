function User(firstname, lastname, email) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
}

const amin = new User("Amin", "NAIRI", "anairi@esgi.fr");
const lucas = new User("Lucas", "LAVANDER", "llavander@esgi.fr");
const quentin = new User("Quentin", "HERMITEAU", "qhermiteau@esgi.fr");

console.log(amin);
console.log(lucas);
console.log(quentin);
