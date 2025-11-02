/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  if (typeof phrase === 'string') {
    const voyelles = 'aeiouyAEIOUY';
    let count = 0;
    for (let char of phrase) {
      if (voyelles.includes(char)) {
        count++;
      }
    }
    return count;
  }

  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  return 0;
  
}

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
