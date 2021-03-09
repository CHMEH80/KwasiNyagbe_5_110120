class DataManager {
  /**
   * l'url du serveur
   * @type {String}
   */
  src;

  /**
   * Mini base de données qui contiendra tous mes produits
   *
   */
  constructor(source) {
    this.src = source;
    /**
     * La source pointé dans laquelle on ira chercher toutes nos données
     *
     */
  }
  /**
   * retourne un objet javascript représentant les données du panier stockées dans localStorage
   */
  getCartContent() {
    //la constante "data" stocke les données récupérées du localStorage par la méthode "getItem".
    const data = localStorage.getItem("cart");
    // si data = null, l'application retourne un objet vide sinon elle retourne un objet javascript représentant les données
    return data === null ? {} : JSON.parse(data);
  }

  /**
   * Sauvegarde le contenu du panier cart.js dans le localStorage
   * @param {object} cartContent id du produit à retourner
   *
   */
  saveCart(cartContent) {
    localStorage.setItem("cart", JSON.stringify(cartContent));
  }

  /**
   * Récupère tous les produits de l'Api
   * @return {Array} les renvoie sous forme de tableau
   *
   */
  async getAllTeddies() {
    // Le fetch pour récupérer toutes les données teddies dans "src".
    // Ensuite le await c'est-à-dire d'attendre, la réponse avant d'exécuter la ligne suivante
    // En même temps je rends asynchrone la fonction getAllTeddies
    this.products = await fetch(this.src);

    // Ensuite converti les données récupérées en .json (la fonction héritée de l'asynchrone qui me permet d'extraire les json)
    // await pour attendre avant d'afficher les produits dans le return

    this.products = await this.products.json();

    console.log("produits:", this.products);
    return this.products;
  }

  /**
   * Récupère l'id du produit et applique la méthode findInProducts
   * @param {string} id id du produit à retourner
   * @return {object} affiche l'objet correspondant à l'id demandé
   *
   */
  async getTeddy(id) {
    const product = this.findInProducts(id);
    if (product !== null) return product;
    try {
      const data = await fetch(this.src + id);
      return await data.json();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   *
   * @param   {string}  id     id du produit à retourner
   *
   * @return  {object}        la méthode qui affiche l'id demandé
   */
  findInProducts(id) {
    this.products.forEach((element) => {
      if (element._id === id) return element;
    });
    return null;
  }
  /**
   * Envoie une requête POST à l'Api comprenant les informations nécessaires de la commande passée par l'utilisateur
   * @param {object} data comprend la data (contact et produits)
   * @return {string} ensuite retourne l'orderId par les paramètres de l'url
   */
  async placeOrder(data) {
    let response = await fetch(this.src + "/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response.orderId;
  }
}
