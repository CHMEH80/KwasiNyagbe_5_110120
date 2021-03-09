const dataManager = new DataManager("http://localhost:3000/api/teddies")

new ListeProduits(document.getElementById("listeProduit"));

new FicheProduit("5be9c8541c9d440000665243",document.getElementById("listeProduit"));
// new FicheProduit("5beaa8bf1c9d440000a57d94",document.getElementById("listeProduit"));
// new FicheProduit("5beaaa8f1c9d440000a57d95",document.getElementById("listeProduit"));
// new FicheProduit("5beaabe91c9d440000a57d96",document.getElementById("listeProduit"));
// new FicheProduit("5beaacd41c9d440000a57d97",document.getElementById("listeProduit"));






// TODO: Créer les composants (panier, produit, page) 


//Ajout de l'article au panier de l'utilisateur
// class Panier {
//   contenu,
//   ajouterProduit: function(produit){};
// }
// class Item {
// }
// }
// const panier = new panier();
// panier.ajouterProduit(item);



/*Lien avec l'API */

// getAllTeddies = () => {
//     return new Promise((resolve) => {
//       let request = new XMLHttpRequest();
//       request.onreadystatechange = function () {
//         if (
//           this.readyState == XMLHttpRequest.DONE &&
//           this.status >= 200 &&
//           this.status < 400
//         ) {
//           resolve(JSON.parse(this.responseText));
//           console.log("Vous êtes Connecté");
//         } else {
//         }
//       };
//       request.open("GET", "http://localhost:3000/api/teddies/" + idPeluches);
//       request.send();
//     });
//   };
  

// async function teddies() {
//     const teddies = await getAllTeddies();
//     /* Lien avec la page index HTML */
  
//     let listeProduit = document.getElementById("listeProduit");
  
//     /* création de la structure index HTML */
  
//     teddies.forEach((teddy) => {
//       let produitBlock = document.createElement("article");
//       let produitType = document.createElement("div");
//       let produitElement = document.createElement("div");
//       let produitPhoto = document.createElement("img");
//       let produitNom = document.createElement("h3");
//       let produitPrix = document.createElement("p");
//       let produitAction = document.createElement("a");
  
//       /*Ajout des attributs au balise index HTML */
//       produitBlock.setAttribute("class", "block_produit");
//       produitType.setAttribute("class", "type_produit");
//       produitPhoto.setAttribute("src", teddy.imageUrl);
//       produitPhoto.setAttribute("alt", "Photo de l'ours en peluche");
//       produitElement.setAttribute("class", "elt_produit");
//       produitNom.setAttribute("class", "nom_produit");
//       produitPrix.setAttribute("class", "prix_produit");
//       produitAction.setAttribute("href", "ficheproduit.html?id=" + teddy._id);
  
//       /* Agencement des éléments index HTML */
//       listeProduit.appendChild(produitBlock);
//       produitBlock.appendChild(produitType);
//       produitType.appendChild(produitPhoto);
//       produitBlock.appendChild(produitElement);
//       produitElement.appendChild(produitNom);
//       produitElement.appendChild(produitPrix);
//       produitElement.appendChild(produitAction);
  
//       /* Contenu des balises index HTML */
//       produitNom.textContent = teddy.name;
//       produitPrix.textContent = teddy.price / 100 + " euros";
//       produitAction.textContent = "En savoir plus";
//     });
//   }

  
  
//   let idPeluches = "";
//   async function detailTeddies() {
//     idPeluches = location.search.substring(4);
//     const detailTeddies = await getAllTeddies();
//     console.log("Administration : Vous regardez la page du produit id_"+detailTeddies._id);
  
//     /* Lien avec la page produit HTML */
  
//     let detailProduit = document.getElementById("detailProduit");
  
//     /* création de la structure produit HTML */
  
//     let detailBlock = document.createElement("section");
//     let detailType= document.createElement("div");
//     let detailElement = document.createElement("div");
//     let detailPhoto = document.createElement("img");
//     let detailNom = document.createElement("h3");
//     let detailDescription = document.createElement("p");
//     let detailInformationPrix = document.createElement("div");
//     let detailPrix = document.createElement("p");
//     let detailOption = document.getElementById("detailOption");
//     let detailAction = document.getElementById("ajout_panier");
  
//     /*Ajout des attributs à la  balise produit HTML */
//     detailBlock.setAttribute("class", "bloc_detail");

//     detailType.setAttribute("class", "detail_type");
//     detailPhoto.setAttribute("src", detailTeddies.imageUrl);
//     detailPhoto.setAttribute("alt", "Photo de " + detailTeddies.name);
//     detailElement.setAttribute("class", "detail_elt");
//     detailNom.setAttribute("class", "detail_nom");
//     detailDescription.setAttribute("class", "detail_description");
//     detailInformationPrix.setAttribute("class", "detail_information_prix");
//     detailPrix.setAttribute("class", "detail_prix");
  
//     /* Agencement des éléments produit HTML */
//     detailProduit.appendChild(detailBlock);
//     detailBlock.appendChild(detailType);
//     detailType.appendChild(detailPhoto);
//     detailBlock.appendChild(detailElement);
//     detailElement.appendChild(detailNom);
//     detailElement.appendChild(detailDescription);
//     detailBlock.appendChild(detailInformationPrix);
//     detailInformationPrix.appendChild(detailPrix);
//     detailInformationPrix.appendChild(detailOption);
//     detailInformationPrix.appendChild(detailAction);
  
//     /* Contenu des balises produit HTML */
//     detailNom.textContent = detailTeddies.name;
//     detailDescription.textContent = detailTeddies.description;
//     detailPrix.textContent = detailTeddies.price / 100 + " €";
  
//     detailTeddies.colors.forEach((teddy) => {
//       let choixOption = document.createElement("option");
//       document
//       .getElementById("choix_option")
//       .appendChild(choixOption).innerHTML = teddy;
//     });
//   }

// //-----PANIER----------//
// let panier;

// //Vérification et initialisation du panier

// if (localStorage.getItem("panier")) {
//   panier = JSON.parse(localStorage.getItem("panier"));
// } else {
//   console.log("Le panier va être initalisé");
//   panier = [];
//   localStorage.setItem("panier", JSON.stringify(panier));
// }

// nombreIndexPanier();

// //Affichage du nombre d'article dans le panier
// function nombreIndexPanier() {
//   let indexPanier = document.getElementById("indexPanier");
//   indexPanier.textContent = panier.length;
// }

// function nombreProduitPanier() {
//   let produitPanier = document.getElementById("indexPanier");
//   produitPanier.textContent = panier.length;
// }


//   ajoutPanier = () => {
//     let acheter = document.getElementById("ajout_panier");
//     acheter.addEventListener("click", async function () {
//       const ajout = await getAllTeddies();
//       panier.push(ajout);
//       localStorage.setItem("panier", JSON.stringify(panier));
//       console.log("Le produit a été ajouté au panier");
//       alert("Cet article a été ajouté dans votre panier");
//       location.reload();
//     });
//   };

//   //------Page Panier-------//

// panierCreation = () => {
//   if (panier.length > 0) {
//     document.getElementById("panierVide").remove();

//     //Création de la structure du tableau récapitulatif
//     let recap = document.createElement("table");
//     let ligneTableau = document.createElement("tr");
//     let recapPhoto = document.createElement("th");
//     let recapNom = document.createElement("th");
//     let recapPrixUnitaire = document.createElement("th");
//     let recapRemove = document.createElement("th");
//     let ligneTotal = document.createElement("tr");
//     let colonneTotal = document.createElement("th");
//     let recapPrixPaye = document.createElement("td");

//     //Placement de la structure dans la page
//     let recapPanier = document.getElementById("panier-recap");
//     recapPanier.appendChild(recap);
//     recap.appendChild(ligneTableau);
//     ligneTableau.appendChild(recapPhoto);
//     ligneTableau.appendChild(recapNom);
//     ligneTableau.appendChild(recapPrixUnitaire);
//     ligneTableau.appendChild(recapRemove);

//     //contenu des entetes
//     recapPhoto.textContent = "Article";
//     recapNom.textContent = "Nom";
//     recapPrixUnitaire.textContent = "Prix";
//     recapRemove.textContent = "Annuler ?";

  
    
//  //Boucle FOR pour affichage des articles dans le panier
     
//     for (let i = 0; i<panier.length; i++) {
    
//       //Création des lignes du tableau

//       let ligneArticle = document.createElement("tr");
//       let photoArticle = document.createElement("img");
//       let nomArticle = document.createElement("td");
//       let prixUnitArticle = document.createElement("td");
//       let supprimerArticle = document.createElement("td");
//       let removeArticle = document.createElement("i");
//       removeArticle.textContent = "";

//       //Attribution des class ou Id
//       ligneArticle.setAttribute("id", "article" + [i]);
//       photoArticle.setAttribute("class", "photo_article");
//       photoArticle.setAttribute("src", panier[i].imageUrl);
//       photoArticle.setAttribute("alt", "Image de l'article commandé");
//       removeArticle.setAttribute("id", "remove" + [i]);
//       removeArticle.setAttribute("class", "fas fa-trash-alt");
//       removeArticle.setAttribute("title", "Supprimer article ?");

//       console.log(i);
      
      


// //Supprimer un produit du panier
//    removeArticle.addEventListener("click", (event) => {this.annulerArticle(i);})
   
        
      

//       //Agencement de la structure HTML
//       recap.appendChild(ligneArticle);
//       ligneArticle.appendChild(photoArticle);
//       ligneArticle.appendChild(nomArticle);
//       ligneArticle.appendChild(prixUnitArticle);
//       ligneArticle.appendChild(supprimerArticle);
//       supprimerArticle.appendChild(removeArticle);

//       //Contenu de chaque ligne

//       nomArticle.textContent = panier[i].name;
//       prixUnitArticle.textContent = panier[i].price / 100 + " €";
//       console.log(panier[i].name);
      

//     };


//     //Dernière ligne du tableau : Total
//     recap.appendChild(ligneTotal);
//     ligneTotal.appendChild(colonneTotal);
//     ligneTotal.setAttribute("id", "ligneSomme");
//     colonneTotal.textContent = "Total à payer";
//     ligneTotal.appendChild(recapPrixPaye);

//     recapPrixPaye.setAttribute("id", "sommeTotal");
//     recapPrixPaye.setAttribute("colspan", "4");
//     colonneTotal.setAttribute("id", "colonneTotal");
//     colonneTotal.setAttribute("colspan", "2");

//     //Calcule de l'addition total
//     let sommeTotal = 0;
//     panier.forEach((panier) => {
//       sommeTotal += panier.price / 100;
//     });

//     //Affichage du prix total à payer dans l'addition
//     console.log(sommeTotal);
//     document.getElementById("sommeTotal").textContent = sommeTotal + " €";
    
//     return sommeTotal;
//   }
// };

// annulerArticle = (i) => {
//   panier.splice(i, 1);
//    localStorage.clear();
//    // Mise à jour du nouveau panier avec suppression de l'article
//    localStorage.setItem("panier", JSON.stringify(panier));
//    //Mise à jour de la page pour affichage de la suppression au client
//    window.location.reload();
//  };  
 

//  /* CONSTRUCTION DU FORMULAIRE */

// //vérification les inputs du formulaire
// checkInput = () => {
//   //Controle Regex
//   let checkNumber = /[0-9]/;
//   let checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   let checkSpecialCharacter = /[§!@#$%^&*().?":{}|<>]/;

//   //message fin de contrôle du formulaire
//   let checkMessage = "";

//   //Récupération des inputs

//   let nom = document.getElementById("nom").value;
//   let prenom = document.getElementById("prenom").value;
//   let email = document.getElementById("email").value;
//   let adresse = document.getElementById("adresse").value;
//   let ville = document.getElementById("ville").value;

//   //tests des différents input du formulaire
//   //Test du nom
//   if (
//     checkNumber.test(nom) == true ||
//     checkSpecialCharacter.test(nom) == true ||
//     nom == ""
//   ) {
//     checkMessage = "Veuillez vérifier les informations concernant votre nom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
//   } else {
//     console.log("Nom accepté");
//   }
//   //Test du prénom
//   if (
//     checkNumber.test(prenom) == true ||
//     checkSpecialCharacter.test(prenom) == true ||
//     prenom == ""
//   ) {
//     checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre prénom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
//   } else {
//     console.log("Prénom accepté");
//   }
//   //Test du mail
//   if (checkMail.test(email) == false) {
//     checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre email. Les caractères spéciaux ne sont pas autorisés";
//   } else {
//     console.log("Adresse mail acceptée");
//   }
//   //Test de l'adresse
//   if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
//     checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";
//   } else {
//     console.log(" Adresse postale acceptée");
//   }
//   //Test de la ville
//   if (
//     (checkSpecialCharacter.test(ville) == true ||
//       checkNumber.test(ville) == true) ||
//     ville == ""
//   ) {
//     checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
//   } else {
//     console.log("Ville acceptée");
//   }
//   //Si un des champs n'est pas conforme afficher un message d'alert en indiquant le pourquoi
//   if (checkMessage != "") {
//     alert("Attention certaines données ne sont pas conformes :" + "\n" + checkMessage);
//   }
//   //Si le formulaire est validé alors construction de l'objet contact
//   else {
//     contact = {
//       lastName: nom,
//       firstName: prenom,
//       address: adresse,
//       city: ville,
//       email: email,
//     };
//     return contact;
//   }
// };
 
// //Vérification du panier
// checkPanier = () => {
//   //Vérification que le panier contient au moins un produit
//   let etatPanier = JSON.parse(localStorage.getItem("panier"));
//   //Si le panier est vide ou null
//   if  (etatPanier.length < 1 || etatPanier == null) {
//     alert("Votre panier est vide");
//     return false;
//   } else {
//     console.log("Le panier n'est pas vide");
//     return true;
//   }
// };

