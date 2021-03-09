class DataManager{

    produits = null;
    src = null;

    constructor(src){
        this.src = src;

    }
    async getAllDataFronServer(){
        const answer = await fetch(this.src);
        this.produits = await answer.json();
        return this.produits;
    }
}



async FicheProduit(idProduit) {
    if (this.produits === null) await this.getAllDataFronServer();
    return this.showPage(idProduit);
}

showPage(idProduit){
    for (let i = 0, size = this.produits.lenght; 1 < size; i++) {
        if (this.produits[i]._id === idProduit) return this.produits[i]
    }
    return{};
}
