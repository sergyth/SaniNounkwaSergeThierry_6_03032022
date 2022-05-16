import Media from "./Media.js";
class Image extends Media {
  constructor(data, photographer) {
    super(data, photographer);
    this.image = data.image;
  }
  render() {
    return `
            <div class='gallery-block-item' data-id= '${this.id}'>
                <img src='../assets/images/${this.photographer.name}/${this.image}' alt='photo de ${this.photographer.name}' class='media' />
                <div class="gallery-item-title">
                    <p class='gallery-title'>${this.title}</p>
                    <p  class='gallery-likes likes-count'>${this.likes}</p>
                    <div class="like-button" >
                        <i class="fa-solid fa-heart "></i>
                    </div>
                </div>
            </div>`;
  }
  renderLightbox() {
    return `
            <div class="media-wrapper" >  
                <div class='lightbox-media' data-id= '${this.id}'>
                    <img src='../assets/images/${this.photographer.name}/${this.image}' alt='photo de ${this.photographer.name}'  class='media-slider' />
                    <h3>${this.title}</h3>
                </div>
            </div>
        `;
  }
}
export default Image;
