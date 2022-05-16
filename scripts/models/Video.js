import Media from './Media.js';

class Video extends Media {
  constructor(data, photographer) {
    super(data, photographer);
    this.video = data.video;
  }
  
  render() {
    return `
      <div class='gallery-block-item'  data-id= '${this.id}'>
          <video  class='media' type='video/mp4' controls='false'>
              <source src='../assets/images/${this.photographer.name}/${this.video}' type='video/mp4' class='video' controls='false'/>
          </video>         
          <div class="gallery-item-title">
            <p class='gallery_item-title'>${this.title}</p>
            <p  class='gallery_item-likes likes-count'>${this.likes}</p>
            <div class="like-button" >
              <i class="fa-solid fa-heart "></i>
            </div>
          </div>
      </div>`;
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