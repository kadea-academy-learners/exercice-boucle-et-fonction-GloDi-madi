/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus.
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function somme(n) {
  // Exercice non implémenté : retourner la somme de 1 à n
  if (typeof n === 'number' && Number.isInteger(n) && n > 0) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  return 0;
  
}

// Ne pas modifier la ligne ci-dessous
module.exports = { somme }
