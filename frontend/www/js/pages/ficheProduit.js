class FicheProduit {
  /**
   * le produit spécifique à afficher
   */
  constructor(idProduit) {
    this.idProduit = idProduit;
  }

  async html() {
    // on récupère les données sur le teddy
    const data = await dataManager.getTeddy(this.idProduit);
    console.log(data);
    // on injecte les données dans le HTML
    return `
      <div class="detail">
    <img src="${data.imageUrl}" alt="photo du nounours"> 
      <div> 
        <p class="detail_nom">${data.name}</p>
      </div>
      <div> 
      <p class="detail_description">${data.description}</p>
      <select>${this.showOption(data)}</select>
      </div>
      <div class="detail_information_prix">${data.price / 100}€</div>
      <button onclick="pageManager.page.add()">ajouter au panier</button>
      <div>
      `;
  }
  /**
   *
   * génère les options pour le menu déroulant de couleurs
   */
  showOption(data) {
    let options = "";
    data.colors.forEach((couleur) => {
      options += `<option value="${couleur}">${couleur}</option>`;
    });
    return options;
  }
  /**
   * ajoute l'id Teddy au panier et affiche l'alert de l'ajout du produit dans le navigateur de l'utilisateur
   */
  add() {
    monPanier.add({
      _id: this.idProduit,
    });
    console.log(monPanier);
    console.log("Le produit a été ajouté à votre panier");
    alert("Le produit a été ajouté à votre panier");
  }
}
