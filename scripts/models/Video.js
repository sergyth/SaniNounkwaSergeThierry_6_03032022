import Media from './Media.js';

class Video extends Media {
  constructor(data, photographer) {
    super(data, photographer);
    this.video = data.video;
  }
  render() {
    return `
        <article class='gallery-block-item'  data-id= ${this.id}>
            <video class='media'controls>
                <source src='../assets/images/${this.photographer.name}/${this.video}' class='media' />
            </video>
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
}
export default Video;