class PageManager {
  /**
   *
   * @param {HTMLElement} domTarget le noeud du DOM dans lequel je veux injecter mon composant
   */
  constructor(domTarget) {
    this.DOM = domTarget;
    // définit la requête et la propriété hash pour lire la barre d'adresse (la partie # qui accompagne l'url)
    this.showPage(window.location.hash.slice(1));
  }

  // affiche la page
  async showPage(newpage) {
    this.page = this.definePage(newpage);
    this.DOM.innerHTML = await this.page.html();
  }

  /**
   * définit le script à utiliser sur la page courante
   * @return {Panier | ListeProduits | FicheProduit | Confirmation} retourne une page
   */
  definePage(request) {
    if (request === "") return new ListeProduits(); // si la requête est égal à rien, l'application retourne la page d'accueil contenant la liste des produits
    if (request === "panier") return new Panier(); // retourne le panier

    if (request.slice(0, 7) === "produit")
      return new FicheProduit(request.slice(8)); // #produit_XXXX   retourne la fiche produit sélectionnée par l'utilisateur
    if (request === "confirmation-commande") return new Confirmation(); // retourne la page de confirmation une fois la commande passée
  }
  /**
   *
   * gère l'affichage d'une nouvelle page
   */
  changePage(newPage) {
    this.showPage(newPage);
  }
}
