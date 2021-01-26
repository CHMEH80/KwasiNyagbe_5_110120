//-----PANIER----------//

//Panier de l'utilisateur
function recupPanier(){
  let panierRecup = localStorage.getItem("panier");
  if (panierRecup === null){
    localStorage.setItem("panier", "[]");
    panierRecup  = [];
  }
  else panierRecup = JSON.parse(panierRecup);
  return {"contenu" : panierRecup };
}

const panier = recupPanier();
panier.affichage = document.getElementById("indexPanier");

panier.actualise = function(panier){
    localStorage.setItem("panier", JSON.stringify(panier));
    affichage.innerText = panier.length;
  }

panier.ajoutProduit = function (id){
      contenu.push(id);
      actualise(contenu);
  }

panier.actualise(panierRecup)