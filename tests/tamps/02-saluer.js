
  // La fonction doit afficher dans la console : "Bonjour, [nom]" où [nom] est remplacé par la valeur du paramètre.
  // Si aucun nom n'est fourni, la fonction doit afficher : "Bonjour, inconnu".
  function saluer(nom) {
    if (nom) {
      console.log(`Bonjour, ${nom}`);
    } else {
      console.log("Bonjour, inconnu");
    }
  }
  
  // Exporter la fonction pour qu’elle puisse être testée
  module.exports= saluer;
  

 module.exports = {
    saluer,
  };