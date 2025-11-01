
  
  function maxDeTrois(...args) {
    // Garde-fou : vérifier que exactement 3 arguments sont fournis
    if (args.length !== 3) {
      return null;
    }
  
    const [a, b, c] = args;
  
    // Vérifier que chaque argument est un nombre réel
    const estValide = (val) => typeof val === "number" && !isNaN(val);
    if (!estValide(a) || !estValide(b) || !estValide(c)) {
      return null;
    }
  
    // Si tous les trois sont égaux
    if (a === b && b === c) {
      return "Les trois nombres sont égaux";
    }
  
    // Retourner le plus grand
    return Math.max(a, b, c);
  }
  
  module.exports = { maxDeTrois };
  
  

 module.exports = {
    maxDeTrois,
  };