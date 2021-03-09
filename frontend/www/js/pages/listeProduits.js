class ListeProduits{

  /**
   * [constructor description]
   *
   * @param   {HTMLElement}  domTarget  [domTarget description]
   *
   * @constructor
   */
  constructor(domTarget){
    this.domTarget = domTarget;
    this.showPage();
  }

  async showPage(){
    let html = "<h2>Votre magasin en ligne d'ours en peluche faits à la main</h2>";
    try{
      const liste = await dataManager.getAllDataFronServer();
      let article;
      for( let i=0, size=liste.length; i<size; i++){
        article = new Article(liste[i])
        html += article.afficheResume();
      }
    }
    catch(err){
      console.error(err);
      html +="problème de connexion au serveur";
    }
    this.domTarget.innerHTML = html;
  }
}



