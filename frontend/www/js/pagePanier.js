
// const sommeTotale = panierCreation();
// const URL = "http://localhost:3000/api/teddies/order";
// const formulaire = document.getElementById("form_1");
// formulaire.addEventListener("submit", function (e) {
//   event.preventDefault();

//   /* Envoi à l'API */
//   // Tableau et objet demandés par l'API pour la commande
//   const contact = {
//     "address"   : document.getElementById("adresse").value,
//     "city"      : document.getElementById("ville").value,
//     "email"     : document.getElementById("email").value,
//     "lastName"  : document.getElementById("nom").value,
//     'firstName' : document.getElementById("prenom").value,
//   };
//   let products = [];

//   let request = new XMLHttpRequest();
//   request.onload = function () {
//     console.log("retour requete AJAX");
//     if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
//       const data = JSON.parse(this.response);
//       console.log(data);
//      window.location = "./confirmation-commande.html?orderId=" + data.orderId + '&montant=' + sommeTotale;
//     } else {
//       console.log("ECHEC AJAX");
//     }
//   };
//   request.open("POST", URL);
//   request.setRequestHeader("Content-Type", "application/json");
//   request.send(JSON.stringify({"contact": contact, "products": products}));

// });

