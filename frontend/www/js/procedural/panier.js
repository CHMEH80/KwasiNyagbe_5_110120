//-----PANIER----------//

//Panier de l'utilisateur

const panier = recupPanier();

function recupPanier(){
  const affichage = document.getElementById("indexPanier");
  let panierRecup = localStorage.getItem("panier");
  if (panierRecup === null){
    localStorage.setItem("panier", "[]");
    panierRecup  = [];
  }
  else panierRecup = JSON.parse(panierRecup);

  const actualise = function(panier){
    localStorage.setItem("panier", JSON.stringify(panier));
    affichage.innerText = panier.length;
  }

  const ajoutProduit = function (id){
      contenu.push(id);
      actualise(contenu);
  }

  actualise(panierRecup)
  return {
    "affichage" : affichage,
    "contenu" : panierRecup,
    "actualise" : actualise,
    "ajoute" : ajoutProduit
  };
}

panier.actualise(["&é","lkjkljklj"])