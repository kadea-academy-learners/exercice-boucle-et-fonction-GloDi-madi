
  function estImpair(n) {
    // Si ce n'est pas un nombre, ou si c'est NaN, retourne null
    if (typeof n !== "number" || isNaN(n)) {
      return null;
    }
  
    // Si c'est un nombre mais pas un entier, retourne false
    if (!Number.isInteger(n)) {
      return false;
    }
  
    // Si c'est un entier, teste l'impair
    return n % 2 !== 0;
  }
  
  module.exports = estImpair;
  
  

 module.exports = {
    estImpair,
  };