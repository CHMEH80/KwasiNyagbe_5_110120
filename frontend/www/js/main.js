/**
 *
 * @type {object}
 * qui prend en paramètre l'url de l'Api où récupérer les teddies
 */
var dataManager = new DataManager("http://localhost:3000/api/teddies/");
// var dataManager = new DataManager(
//   "https://auroremyfirstonlinesite.herokuapp.com/api/teddies/"
// );

/**
 * création du panier
 */
var monPanier = new Cart(document.querySelector(".nav-item"));

/**
 * création la page de la liste des produits
 */
var pageManager = new PageManager(document.getElementById("listeProduit"));
