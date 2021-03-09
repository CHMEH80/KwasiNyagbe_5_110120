/* global dataManager */
class Cart {
  /**
   * réprésentation du DOM de mon composant
   * @type {HTMLElement}
   */
  DOM;

  /**
   * objet représentant le contenu du panier
   * @type {Object}
   */
  content = {};

  /**
   * nombre de produit dans le panier
   */
  nContent = 0;

  /**
   *
   * @param   {HTMLElement}  domTarget  le noeud du DOM dans lequel je veux injecter mon composant
   *
   * @constructor
   */
  constructor(domTarget) {
    this.DOM = document.createElement("panier");
    this.DOM.className = "fas fa-shopping-basket";
    this.DOM.addEventListener("click", function () {
      pageManager.changePage("panier");
    });
    // ajoute ma représentation au "DOM"
    domTarget.appendChild(this.DOM);
    // récupère les données depuis le localStorage
    this.getSavedContent();
    // ensuite le render rempli le panier
    this.render();
  }

  // met à jour le DOM avec le nombre d'articles qu'il y a dans le panier
  render() {
    this.DOM.innerText = `Panier (${this.nContent})`;
  }

  /**
   * ajoute un produit au panier
   *
   * @param {Object}  product  un produit
   * @param {String} product._id l'id du produit
   * @param {String} product.name le nom du produit
   * @param {Number} product.price le prix du produit
   * @param {String} product.description la description du produit
   * @param {Array} product.colors la couleur du produit
   * @param {String} product.imageUrl l'image du produit
   *
   * @return {void}           ajoute un produit au panier
   */
  add(product) {
    if (this.content[product._id] === undefined) {
      this.content[product._id] = product;
      this.content[product._id].qty = 1;
    } else this.content[product._id].qty++;
    // le contenu du panier se met à jour dès qu'on ajoute un autre produit
    this.nContent++;
    //met à jour le dataManager qui gère le panier
    dataManager.saveCart(this.content);
    // met à jour notre panier
    this.render();
  }
  /**
   * Enlève un produit du panier sur la page récapitulatif produit
   * @param {*} productId l'Id du produit
   */
  remove(productId) {
    // si on essaye de supprimer un produit qui n'est pas dans le panier, l'application ne fait rien
    if (this.content[productId] === undefined) return;
    this.nContent--;
    this.content[productId].qty--;
    const quantiteRestante = this.content[productId].qty;
    // enlève l'artcicle une fois que la quantité est à 0
    if (this.content[productId].qty === 0) delete this.content[productId];
    //met à jour le dataManager qui gère le panier
    dataManager.saveCart(this.content);
    // met à jour notre panier
    this.render();
    // retourne la quantité restante pour pouvoir mettre à jour le tableau récapitulatif de commande (quand on supprime un item avec l'icône poubelle)
    return quantiteRestante;
  }

  getSavedContent() {
    // récupère les données depuis le dataManager (localStorage)
    this.content = dataManager.getCartContent();
    // recalcule la quantité totale d'articles à partir des données du panier
    for (const value of Object.values(this.content)) {
      this.nContent += value.qty;
    }
    // met à jour notre panier
    this.render();
  }

  // permet de supprimer tout le contenu du panier
  cleanCart() {
    this.content = {};
    this.nContent = 0;
    dataManager.saveCart(this.content);
    this.render();
  }
}
