class ListeProduits {
  /**
   * [constructor description]
   *
   * @constructor
   */
  constructor() {}

  async html() {
    let html = "";
    /**
     * Gère les erreurs. Si récupération des teddies depuis le serveur et la fonction (for) appelée depuis le bloc try renvoie une exception, le contrôle sera immédiatement passé à la clause catch
     */
    try {
      const liste = await dataManager.getAllTeddies();
      let article;
      for (let i = 0, size = liste.length; i < size; i++) {
        article = new Article(liste[i]);
        html += article.afficheResume();
      }
    } catch (err) {
      /**
       * La clause catch qui prend en paramètre (err) affichera à l'utilisateur qu'il y'a problème de connexion au serveur.
       */
      console.error(err);
      html += "problème de connexion au serveur";
    }

    return html;
  }
}
