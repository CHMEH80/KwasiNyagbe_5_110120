class Confirmation {
  constructor() {
    this.produits = dataManager.getCartContent();
    this.total = 0;
    this.productsOrder = [];
    this.orderId = null;
  }

  // calcul le prix total de la commande
  async calculTotal() {
    let total = 0;
    for (const [key, value] of Object.entries(this.produits)) {
      const specs = await dataManager.getTeddy(key);
      total += specs.price * value.qty;
    }
    // divise par 100 car le prix est en centimes d'euros
    return total / 100;
  }

  // envoi de la commande au serveur
  async requeteAjax() {
    // Tableau et objet demandés par l'API pour la commande

    const contact = {
      address: document.getElementById("adresse").value,
      city: document.getElementById("ville").value,
      email: document.getElementById("email").value,
      firstName: document.getElementById("prenom").value,
      lastName: document.getElementById("nom").value,
    };

    let products = [];
    for (const key of Object.keys(this.produits)) {
      products.push(key);
    }

    // envoie la commande grâce au dataManager
    this.orderId = await dataManager.placeOrder({
      contact: contact,
      products: products,
    });
    this.total = await this.calculTotal();

    // Supprimer le contenu du panier
    monPanier.cleanCart();
  }

  async html() {
    await this.requeteAjax();
    console.log(this.orderId);
    return this.templateRecap();
  }
  /**
   * retourne la structure html du tableau récapitulatif de la commande
   */
  templateRecap() {
    return `
    <section id="confirmation">
        <h2>Confirmation de votre commande</h2>
        <p class="textConfirm">Cher (è) client (e)<span id="firstName"></span>,</p>
        <p class="textConfirm">
            Nous vous remercions pour votre achat.
        </p>
        <p class="textConfirm">
            Votre N° de commande est : <span id="idArea">${this.orderId}</span>
        </p>
        <p class="textConfirm"> Le montant de votre commande est de : <span id="montant">${this.total} €</span></p>
    </section>
    <section class="recapitulatif">
        <div class="retourAccueil">
            <a href="index.html">Retourner à l'accueil</a>
        </div>
    </section>
    `;
  }
}
