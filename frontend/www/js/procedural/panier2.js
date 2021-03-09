class Panier {

    /**
     * élément dans le DOM qui affiche le nombre de produits dans le panier
     * @type {HTMLElement}
     */
    affichage;

    /**
     * tableau qui contient les produits commandés
     * @type {Array}
     */
    contenu;



    constructor() {
        this.affichage = document.getElementById("indexPanier");
        this.contenu = localStorage.getItem("panier");
        if (this.contenu === null) {
            localStorage.setItem("panier", "[]");
            this.contenu = [];
        }
        else this.contenu = JSON.parse(this.contenu);
        this.actualise(this.contenu);
    }

    actualise(panier) {
        localStorage.setItem("panier", JSON.stringify(panier));
        this.affichage.innerText = panier.length;
    }

    ajoutProduit(id) {
        this.contenu.push(id);
        this.actualise(this.contenu);
    }
}