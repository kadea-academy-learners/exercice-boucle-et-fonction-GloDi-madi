
  function nombreDeVoyelle(phrase) {
    if (typeof phrase !== "string") {
      return null; // sécurité : doit être une chaîne
    }
  
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    let compteur = 0;
  
    for (let char of phrase.toLowerCase()) {
      if (voyelles.includes(char)) {
        compteur++;
      }
    }
  
    return compteur;
  }
  
  // Exporter la fonction pour les tests
  module.exports = nombreDeVoyelle;
  

 module.exports = {
    nombreDeVoyelle,
  };