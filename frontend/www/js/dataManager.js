class DataManager{

    produits = null;
    src = null;

    constructor(src){
        this.src = src;

    }
    async getAllDataFronServer(){
        const answer = await fetch(this.src);
        console.log(await answer.json());
    }
}

async function teddies() {
    const teddies = await getAllTeddies();
  
    /* Lien avec la page index HTML */
  
    let listeProduit = document.getElementById("listeProduit");
  
    /* création de la structure index HTML */
  
    teddies.forEach((teddy) => {
      let produitContenant = document.createElement("section");
      let produitIllustration = document.createElement("div");
      let produitElement = document.createElement("div");
      let produitPhoto = document.createElement("img");
      let produitNom = document.createElement("h3");
      let produitPrix = document.createElement("p");
      let produitAction = document.createElement("a");
  
      /*Ajout des attributs au balise index HTML */
      produitContenant.setAttribute("class", "produit_contenant");
      produitIllustration.setAttribute("class", "produit_illustration");
      produitPhoto.setAttribute("src", teddies.imageUrl);
      produitPhoto.setAttribute("alt", "Photo de l'ours en peluche");
      produitElement.setAttribute("class", "produit_element");
      produitNom.setAttribute("class", "produit_nom");
      produitPrix.setAttribute("class", "produit_prix");
      produitAction.setAttribute("href", "produit.html?id=" + teddies._id);
  
      /* Agencement des éléments index HTML */
      listeProduit.appendChild(produitContenant);
      produitContenant.appendChild(produitIllustration);
      produitIllustration.appendChild(produitPhoto);
      produitContenant.appendChild(produitElement);
      produitElement.appendChild(produitNom);
      produitElement.appendChild(produitPrix);
      produitElement.appendChild(produitAction);
  
      /* Contenu des balises index HTML */
      produitNom.textContent = teddy.name;
      produitPrix.textContent = teddy.price / 100 + " euros";
      produitAction.textContent = "En savoir plus";
    });
  }