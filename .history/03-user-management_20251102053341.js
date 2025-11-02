// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin() {
	function whoIsAdmin(utilisateurs) {
  return utilisateurs
    .filter(user => user.estAdmin === true)
    .map(user => user.nom);
}
const utilisateurs = [
  { nom: "Madi", age: 25, estAdmin: true },
  { nom: "nat", age: 30, estAdmin: false },
  { nom: "Glodi", age: 22, estAdmin: true },
  { nom: "Yuhe", age: 28, estAdmin: false }
];

console.log(whoIsAdmin(utilisateurs)); // Affiche ["Madi", "Glodi"]




}

module.exports = {
	whoIsAdmin,
};
