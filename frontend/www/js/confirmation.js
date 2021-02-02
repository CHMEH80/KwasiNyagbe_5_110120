document.getElementById("idArea").innerText = window.location.search.slice(1);
localStorage.setItem("panier", JSON.stringify([]));