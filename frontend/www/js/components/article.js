class Article{
  constructor(specs){
    for (const [key, value] of Object.entries(specs)) {
      this[key] = value;
    }
  }

  afficheResume(){
    return `
      <article onclick="">
      <img src="${this.imageUrl}" alt="photo du nounours ${this.name}">
      <h3>${this.name}</h3>
      <price>${this.price/100}€</price>
      <button>En savoir plus</button>
    </article>
    `;
  }
}