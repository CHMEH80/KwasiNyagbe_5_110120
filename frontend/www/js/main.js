

/*Lien avec l'API */

getAllTeddies = () => {
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (
          this.readyState == XMLHttpRequest.DONE &&
          this.status >= 200 &&
          this.status < 400
        ) {
          resolve(JSON.parse(this.responseText));
          console.log("Vous êtes Connecté");
        } else {
        }
      };
      request.open("GET", "http://localhost:3000/api/teddies/" + idPeluches);
      request.send();
    });
  };
  

async function teddies() {
    const teddies = await getAllTeddies();
    /* Lien avec la page index HTML */
  
    let listeProduit = document.getElementById("listeProduit");
  
    /* création de la structure index HTML */
  
    teddies.forEach((teddy) => {
      let produitBlock = document.createElement("article");
      let produitType = document.createElement("div");
      let produitElement = document.createElement("div");
      let produitPhoto = document.createElement("img");
      let produitNom = document.createElement("h3");
      let produitPrix = document.createElement("p");
      let produitAction = document.createElement("a");
  
      /*Ajout des attributs au balise index HTML */
      produitBlock.setAttribute("class", "block_produit");
      produitType.setAttribute("class", "type_produit");
      produitPhoto.setAttribute("src", teddy.imageUrl);
      produitPhoto.setAttribute("alt", "Photo de l'ours en peluche");
      produitElement.setAttribute("class", "elt_produit");
      produitNom.setAttribute("class", "nom_produit");
      produitPrix.setAttribute("class", "prix_produit");
      produitAction.setAttribute("href", "ficheproduit.html?id=" + teddy._id);
  
      /* Agencement des éléments index HTML */
      listeProduit.appendChild(produitBlock);
      produitBlock.appendChild(produitType);
      produitType.appendChild(produitPhoto);
      produitBlock.appendChild(produitElement);
      produitElement.appendChild(produitNom);
      produitElement.appendChild(produitPrix);
      produitElement.appendChild(produitAction);
  
      /* Contenu des balises index HTML */
      produitNom.textContent = teddy.name;
      produitPrix.textContent = teddy.price / 100 + " euros";
      produitAction.textContent = "En savoir plus";
    });
  }

  
  
  let idPeluches = "";
  async function detailTeddies() {
    idPeluches = location.search.substring(4);
    const detailTeddies = await getAllTeddies();
    console.log("Administration : Vous regardez la page du produit id_"+detailTeddies._id);
  
    /* Lien avec la page produit HTML */
  
    let detailProduit = document.getElementById("detailProduit");
  
    /* création de la structure produit HTML */
  
    let detailBlock = document.createElement("section");
    let detailType= document.createElement("div");
    let detailElement = document.createElement("div");
    let detailPhoto = document.createElement("img");
    let detailNom = document.createElement("h3");
    let detailDescription = document.createElement("p");
    let detailInformationPrix = document.createElement("div");
    let detailPrix = document.createElement("p");
    let detailOption = document.getElementById("detailOption");
    let detailAction = document.getElementById("ajout_panier");
    
  
    /*Ajout des attributs à la  balise produit HTML */
    detailBlock.setAttribute("class", "bloc_detail");

    detailType.setAttribute("class", "detail_type");
    detailPhoto.setAttribute("src", detailTeddies.imageUrl);
    detailPhoto.setAttribute("alt", "Photo de " + detailTeddies.name);
    detailElement.setAttribute("class", "detail_elt");
    detailNom.setAttribute("class", "detail_nom");
    detailDescription.setAttribute("class", "detail_description");
    detailInformationPrix.setAttribute("class", "detail_information_prix");
    detailPrix.setAttribute("class", "detail_prix");
  
    /* Agencement des éléments produit HTML */
    detailProduit.appendChild(detailBlock);
    detailBlock.appendChild(detailType);
    detailType.appendChild(detailPhoto);
    detailBlock.appendChild(detailElement);
    detailElement.appendChild(detailNom);
    detailElement.appendChild(detailDescription);
    detailBlock.appendChild(detailInformationPrix);
    detailInformationPrix.appendChild(detailPrix);
    detailInformationPrix.appendChild(detailOption);
    detailInformationPrix.appendChild(detailAction);
  
    /* Contenu des balises produit HTML */
    detailNom.textContent = detailTeddies.name;
    detailDescription.textContent = detailTeddies.description;
    detailPrix.textContent = detailTeddies.price / 100 + " €";
  
    detailTeddies.colors.forEach((teddy) => {
      let choixOption = document.createElement("option");
      document
      .getElementById("choix_option")
      .appendChild(choixOption).innerHTML = teddy;
    });
  }



