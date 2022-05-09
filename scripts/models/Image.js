import Media from './Media.js';
class Image extends Media{
    constructor(data, photographer){
     super(data, photographer)
       this.image = data.image;
     
    }
    render() {
        return `
            <article class='gallery-block-item' data-id= '${this.id}'>
                <img src='../assets/images/${this.photographer.name}/${this.image}' class='media' />
                <div class="gallery-item-title">
                    <p class='gallery-title'>${this.title}</p>
                    <p  class='gallery-likes likes-count'>${this.likes}</p>
                    <div class="like-button" >
                        <i class="fa-solid fa-heart "></i>
                    </div>
                </div>
            </article>`;
    } 
    renderLightbox()
    {
        return`
            <article class='lightbox-media' data-id= '${this.id}'>  
                <img src='../assets/images/${this.photographer.name}/${this.image}' class='media-slider' />
            </article>
        `
    }
}
export default Image;