class Produit {
  constructor(objetJson, racineDom) {
    //Ajout des autres propriétés du produit ( l'image, la description, le nom, le prix, la couleur et l'id)
    this.imageUrl = objetJson.imageUrl;
    this.description = objetJson.description;
    this.name = objetJson.name;
    this.price = objetJson.price;
    this.colors = objetJson.colors;
    this._id = objetJson._id;
    this.racineDom = racineDom;
  }
  /**
   * crée la structure html de chaque Teddy avec ses propriétés
   */
  render() {
    this.racineDom.insertAdjacentHTML(
      "afterbegin",
      // Ajoute le reste du HTML
      `
    <img src="${this.imageUrl}" alt="photo du nounours"> 
    <div> 
      <p class="detail_nom">${this.name}</p>
    </div>
    <div> 
    <p class="detail_description">${this.description}</p>
  </div>
    <div class="detail_information_prix">${this.price / 100}€</div>
    `
    );

    const couleurs = this.racineDom.querySelector("#choix_option");

    // on créé dynamiquement les options pour le menu déroulant
    this.colors.forEach((couleur) => {
      const option = document.createElement("option");
      option.value = couleur;
      option.textContent = couleur;
      couleurs.appendChild(option);
    });

    const boutonAjouter = this.racineDom.querySelector("#ajout_panier");
    // gestion de l'ajout d'un article au panier
    boutonAjouter.addEventListener("click", () => {
      monPanier.add({
        _id: this._id,
      });
      console.log(monPanier);
      console.log("Le produit a été ajouté à votre panier");
      alert("Le produit a été ajouté à votre panier");
    });
  }
}
