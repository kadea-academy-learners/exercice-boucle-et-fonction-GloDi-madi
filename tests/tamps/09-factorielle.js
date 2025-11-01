
    // Vérification de sécurité : n doit être un entier positif ou nul
    if (typeof n !== "number" || isNaN(n) || n < 0 || !Number.isInteger(n)) {
      return null;
    
    };
  
    // Calcul de la factorielle
    let resultat = 1;
  
    for (let i = 2; i <= n; i++) {
      resultat *= i;
    }
  
    return resultat;
  }
  
  // Exporter la fonction pour les tests
  module.exports= factorielle;
  

 module.exports = {
    factorielle,
  };