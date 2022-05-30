import Media from './Media.js';

class Video extends Media {
  constructor(data, photographer) {
    super(data, photographer);
    this.video = data.video;
  }
  
  render() {
    return `
      <article class='gallery-block-item'  data-id= '${this.id}'>
          <video  class='media' type='video/mp4' controls='false' tabindex="0">
              <source src='../assets/images/${this.photographer.name}/${this.video}' type='video/mp4' class='video' controls='false'/>
          </video>         
          <div class="gallery-item-title">
            <p class='gallery-title' tabindex="0">${this.title}</p>
            <div class="like-wrapper">
              <p class='gallery-likes likes-count' >${this.likes}</p>
              <div class="like-button" tabindex="0" ><i class="fa-solid fa-heart "></i></div>
            </div>
          </div>
      </article>`;
  }

  renderLightbox()
    {
      return`
        <div class='lightbox-media' data-id= ${this.id}>
          <video  type='video/mp4' controls='false' class='media-slider'>
            <source src='../assets/images/${this.photographer.name}/${this.video}'/>
          </video>
          <h3>${this.title}</h3>  
        </div>
      `;
    }
}

export default Video;