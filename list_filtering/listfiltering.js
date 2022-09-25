// utilisation methode filter pour donner comme resultat 
// un tableau composé que d'entier

function filter_list(l) {

    let arr= l.filter((nombre)=>{return typeof nombre=="number"});
  
    return arr
}