/*
  Énoncé :
  Écris une fonction `factorielle(n)` qui retourne la factorielle de `n`.
  - Si n est négatif ou invalide, retourner 0
  - Exemple : factorielle(5) => 120

  Signature attendue :
    function factorielle(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function factorielle(n) {
  // Exercice non implémenté : calculer la factorielle de n
  if (typeof n === 'number' && Number.isInteger(n) && n >= 0) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  return 0;
  
}

// Ne pas modifier la ligne ci-dessous
module.exports = { factorielle }
