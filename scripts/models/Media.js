class Media {
  constructor (data, photographer) {
    this.id = data.id
    this.photographer = photographer
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
    this.hasBeenLiked = false
  }

  // permet d'ajouter ou retirer un like et d' afficher le resultat

  toggle () {
    if (this.hasBeenLiked) {
      this.likes--
      this.hasBeenLiked = false
    } else {
      this.likes++
      this.hasBeenLiked = true
    }
    document.querySelector(`article[data-id='${this.id}'] .likes-count`).innerHTML = this.likes
  }
}

export default Media
