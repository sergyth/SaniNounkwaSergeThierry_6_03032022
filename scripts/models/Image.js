import Media from './Media.js'
class Image extends Media {
  constructor (data, photographer) {
    super(data, photographer)
    this.image = data.image
  }

  render () {
    return `
      <article class='gallery-block-item' data-id= '${this.id}'>
        <button class='media' type='button' tabindex="-1"><img src='../assets/images/${this.photographer.name}/${this.image}' alt='${this.title}' class='media' tabindex="0" /></button>
        <div class="gallery-item-title">
          <p class='gallery-title' tabindex="0">${this.title}</p>
          <div class="like-wrapper">
            <p  class='gallery-likes likes-count'>${this.likes}</p>
            <button class="like-button" ><i class="fa-solid fa-heart" aria-label='likes'></i></button>
          </div>
        </div>
      </article>`
  }

  renderLightbox () {
    return `
      <div class="media-wrapper" >  
        <div class='lightbox-media' data-id= '${this.id}'>
          <img src='../assets/images/${this.photographer.name}/${this.image}' alt='${this.title}' aria-label='image closeup view'   class='media-slider' />
          <h3>${this.title}</h3>
        </div>
      </div>`
  }
}
export default Image
