/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
  // Exercice non implémenté : retourner le plus grand ou un message si égaux
  if (typeof a === 'number' && typeof b === 'number') {
    if (a > b) {
      return a;
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  return null;
    } else if (b > a) {
      return b;
    } else {
      return "Les deux nombres sont égaux";
    }
  } else {
    return null;
  }

}
console.log(max(5, 10));    // 10
console.log(max(20, 15));  // 20
console.log(max(7, 7)); // "Les deux nombres sont égaux"
console.log(max(5, "a")); // null         

// Ne pas modifier la ligne ci-dessous
module.exports = { max }
