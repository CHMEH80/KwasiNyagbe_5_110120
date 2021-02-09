
const params = new URLSearchParams(location.search);
console.log(location.search);
console.log(params);
document.getElementById("idArea").innerText = params.get('orderId');
document.getElementById("montant").innerText = params.get('montant') + ' Euros';
localStorage.setItem("panier", JSON.stringify([]));