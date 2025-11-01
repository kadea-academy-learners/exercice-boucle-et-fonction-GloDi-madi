
  // Exemple : somme(4) doit retourner 10, car 1 + 2 + 3 + 4 = 10.
  function somme(n) {
    if (typeof n !== "number" || isNaN(n) || n < 0 || !Number.isInteger(n)) {
      return 0; // Sécurité : n doit être un entier positif
    }
  
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
  
    return total;
  }
  
  // Exporter la fonction pour les tests
  module.exports = somme;
  

 module.exports = {
    somme,
  };