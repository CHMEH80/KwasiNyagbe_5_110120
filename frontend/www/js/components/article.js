class Article {
  /**
   *
   * @param {object} specs spécificités des teddies
   */
  constructor(specs) {
    // pour chaque entrée de l'objet (specs), on fera "this key" sera égal à valeur
    for (const [key, value] of Object.entries(specs)) {
      this[key] = value;
    }
  }

  /**
 * appelle pageManager et change la page
   retourne la liste des produits et leurs propriétés   
 */
  afficheResume() {
    return `
      <article onclick="pageManager.changePage('produit_${this._id}')"> 
      <img src="${this.imageUrl}" alt="photo du nounours ${this.name}">
      <h3>${this.name}</h3>
      <price>${this.price / 100}€</price>
      <button>En savoir plus</button>
    </article>
    `;
  }
}
