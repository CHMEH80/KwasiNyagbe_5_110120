panierCreation();

//confirmCommande();

const URL = "http://localhost:3000/api/teddies/order";
const formulaire = document.getElementById("form_1");

formulaire.addEventListener("submit", function (e) {
  event.preventDefault();

  /* Envoi à l'API */
  // Tableau et objet demandé par l'API pour la commande
  let contact;
  let products = [];

  let request = new XMLHttpRequest();
  request.onload = function () {
    console.log("retour requete AJAX");
    if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
      console.log("SUCCES AJAX");
    } else {
      console.log("ECHEC AJAX");
    }
  };
  request.open("POST", URL);
  request.setRequestHeader("Content-Type", "application/json");

  // TODO: Construire le "payLoad" avec l'adresse, l'ID des produits à acheter etc. (voir la méthode "orderTeddies" dans backend/controllers/teddy.js)
  request.send();

});

/* le code de confirmation de commande */