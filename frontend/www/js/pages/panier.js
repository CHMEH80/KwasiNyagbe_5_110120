// correspond au prix total du contenu du panier
let sommeTotale = 0;

class Panier {
  constructor() {
    this.produits = dataManager.getCartContent();
    this.productsOrder = [];
  }

  // génère le HTML si le panier est vide ou pas
  async html() {
    if (Object.keys(this.produits).length === 0)
      return this.templatePanierVide();
    return (await this.templateRecap()) + this.templateFormulaire();
  }

  /**
   * retourne la structure html du tableau récapitulatif de la commande
   */
  async templateRecap() {
    return `
    <section class="recapitulatif">
      <h2>Récapitulatif de votre commande</h2>
      <p>
        Veuillez vérifier votre commande ci-dessous avant de valider le
        paiement.
      </p>
      <div id="panier-recap">
        <table>
          <tr>
            <th>Article</th>
            <th>Nom</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Annuler ?</th>
          </tr>
          ${await this.boucleProduits()}
          <tr id="ligneSomme">
            <th id="colonneTotal" colspan="2">Total à payer</th>
            <td id="sommeTotal" colspan="4">${sommeTotale} €</td>
          </tr>
        </table>
      </div>
    </section>
    `;
  }
  /**
   * retourne la structure html du formulaire de commande
   */
  templateFormulaire() {
    return `
    <section class="formulaire_commande">
    <h2>Merci de passer votre commande</h2>
    <div class="cadre">
      <form method="post" name="formContact" id="form_1">
        <div class="form-group">
          <label for="nom">
            Nom de famille
          </label>
          <input type="text" id="nom" name="nom" class="form-control" required="" autofocus="" placeholder="Renseignez votre nom de famille" value="">
        </div>
        <div class="form-group">
          <label for="prenom">
            Prénom
          </label>
          <input type="text" id="prenom" name="prenom" class="form-control" required="" placeholder="Renseignez votre prénom" value="">
        </div>
        <div class="form-group">
          <label for="email">
            Adresse email
          </label>
          <input type="email" id="email" name="email" class="form-control" required="" placeholder="Entrez une adresse mail valide" value="">
        </div>
        <div class="form-group">
          <label for="adresse">
            Adresse postale et de facturation
          </label>
          <input type="text" id="adresse" name="adresse" class="form-control" required="" placeholder="Ex: 75 route de Paris" value="">
        </div>

        <div class="form-group">
          <label for="ville">
            Ville
          </label>
          <input type="text" id="ville" name="ville" class="form-control" required="" placeholder="Ex: Paris" value="">
        </div>
        <div class="form-group">
          <label>
            Choix du moyen de paiement
          </label>
          <div id="carte">
            <input type="radio" class="paiement" name="identifiant" value="Visa" checked=""><i class="fab fa-cc-visa fa-2x"></i>
            <input type="radio" class="paiement" name="identifiant" value="Mastercard"><i class="fab fa-cc-mastercard fa-2x"></i>
            <input type="radio" class="paiement" name="identifiant" value="Paypal"><i class="fab fa-cc-paypal fa-2x"></i>
          </div>
        </div>

        <button id="commander" type="submit" name="commander" onclick="pageManager.page.checkForm()">
          Commander
        </button>
      </form>
    </div>
  </section>
    `;
  }
  /**
   * retourne la structure html lorsque l'on clique sur le panier sans commande.
   */
  templatePanierVide() {
    return `
      <h2>Votre panier est vide</h1>
    `;
  }
  /**
   * crée pour chaque teddy ligne <tr> dans le tableau avec la formule qui gère les produits et sa somme totale
   */
  async boucleProduits() {
    let content = "";
    let specs;
    // pour chaque teddy, crée une ligne <tr> dans le tableau
    for (const [key, value] of Object.entries(this.produits)) {
      specs = await dataManager.getTeddy(key);
      content += `
        <tr id="article_${key}">
          <td><img class="photo_article" src="${
            specs.imageUrl
          }" alt="Image de ${specs.name}"></td>
          <td>${specs.name}</td>
          <td>${specs.price / 100} €</td>
          <td id="quantite_${key}">${value.qty}</td>
          <td><i id="remove_${key}" class="fas fa-trash-alt" title="Supprimer article ?" onclick="supprimerArticle('${key}')"></i></td>
        </tr>`;
      // Calcul de la somme total de ligne de produit
      sommeTotale += (specs.price * value.qty) / 100;
      for (let i = 0; i < value.qty; i++) {
        this.productsOrder.push[key];
      }
    }
    return content;
  }

  //vérification des inputs du formulaire
  checkForm(e) {
    e = e || window.event;
    e.preventDefault();
    //Controle Regex
    let checkNumber = /[0-9]/;
    let checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let checkSpecialCharacter = /[§!@#$%^&*().?":{}|<>]/;

    //message fin de contrôle du formulaire
    let checkMessage = "";

    //Récupération des inputs

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let ville = document.getElementById("ville").value;

    //tests des différents input du formulaire
    //Test du nom
    if (
      checkNumber.test(nom) == true ||
      checkSpecialCharacter.test(nom) == true ||
      nom == ""
    ) {
      checkMessage =
        "Veuillez vérifier les informations concernant votre nom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
    } else {
      console.log("Nom accepté");
    }
    //Test du prénom
    if (
      checkNumber.test(prenom) == true ||
      checkSpecialCharacter.test(prenom) == true ||
      prenom == ""
    ) {
      checkMessage =
        checkMessage +
        "\n" +
        "Veuillez vérifier les informations concernant votre prénom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
    } else {
      console.log("Prénom accepté");
    }
    //Test du mail
    if (checkMail.test(email) == false) {
      checkMessage =
        checkMessage +
        "\n" +
        "Veuillez vérifier les informations concernant votre email. Les caractères spéciaux ne sont pas autorisés";
    } else {
      console.log("Adresse mail acceptée");
    }
    //Test de l'adresse
    if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
      checkMessage =
        checkMessage +
        "\n" +
        "Veuillez vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";
    } else {
      console.log(" Adresse postale acceptée");
    }
    //Test de la ville
    if (
      checkSpecialCharacter.test(ville) == true ||
      checkNumber.test(ville) == true ||
      ville == ""
    ) {
      checkMessage =
        checkMessage +
        "\n" +
        "Veuillez vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
    } else {
      console.log("Ville acceptée");
    }
    //Si un des champs n'est pas conforme afficher un message d'alert en indiquant le pourquoi
    if (checkMessage != "") {
      alert(
        "Attention certaines données ne sont pas conformes :" +
          "\n" +
          checkMessage
      );
    } else {
      pageManager.changePage("confirmation-commande");
    }
  }
}

/**
 *
 * gère les quantités en cas suppression d'un article dans le panier et met à jour la somme totale
 */
async function supprimerArticle(id) {
  const panierRecap = document.querySelector("#panier-recap");
  const recapPrixPaye = document.querySelector("#sommeTotal");
  // Récupérer quantité restante
  const quantiteRestante = monPanier.remove(id);
  // Si c'est 0 => supprimer la ligne
  if (quantiteRestante === 0) {
    panierRecap.querySelector("#article_" + id).remove();
  } else {
    // sinon on diminue d'une unité la quantité de la ligne
    const q = panierRecap.querySelector("#quantite_" + id);
    q.textContent = quantiteRestante;
  }
  // Mettre à jour somme totale
  const teddy = await dataManager.getTeddy(id);
  // division par cent car le prix est en centimes d'euros
  const prix = teddy.price / 100;

  sommeTotale -= prix;
  recapPrixPaye.textContent = sommeTotale + " €";
}
