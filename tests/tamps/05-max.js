
  // Si les deux nombres sont égaux, retourne le message "Les deux nombres sont égaux".$
  function max(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
      return null; // sécurité : les paramètres doivent être des nombres valides
    }
  
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return "Les deux nombres sont égaux";
    }
  }
  
  // Export de la fonction pour les tests
  module.exports = max;
  

 module.exports = {
    max,
  };