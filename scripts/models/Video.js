import Media from './Media.js';

class Video extends Media {
  constructor(data, photographer) {
    super(data, photographer);
    this.video = data.video;
  }
  render() {
    return `
        <article class='gallery-block-item'  data-id= ${this.id}>
            <div class="media">
              <video class='media' type='video/mp4' controls>
                  <source src='../assets/images/${this.photographer.name}/${this.video}'/>
              </video>
            </div>
            <div class="gallery-item-title">
                <p class='gallery_item-title'>${this.title}</p>
                <p  class='gallery_item-likes likes-count'>${this.likes}</p>
                <div class="like-button" >
                  <i class="fa-solid fa-heart ">
                </i>
            </div>
                </p>
            </div>
        </article>`;
  }
  renderLightbox()
    {
        return`
            <article class='lightbox' data-id= ${this.id}>
                <i class="fa-solid fa-chevron-left"></i>
                <img src='../assets/images/${this.photographer.name}/${this.video}' class='media' />
                <i class="fa-solid fa-chevron-right"></i>
            </article>
        `;
    }
}

export default Video;