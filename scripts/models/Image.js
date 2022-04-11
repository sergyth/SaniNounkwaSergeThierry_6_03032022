import Media from './Media.js';
class Image extends Media{
    constructor(data, photographer){
     super(data, photographer)
       this.image = data.image;
     
    }
    render() {
        return `
            <article class='gallery-block-item'>
                <img src='../assets/images/${this.photographer.name}/${this.image}' class='media' />
                <div class="gallery-item-title">
                    <p class='gallery_item-title'>${this.title}</p>
                    <p  class='gallery_item-likes'>${this.likes}
                    <i class="fa-solid fa-heart "></i>
                    </p>
                </div>
            </article>`;
    }
}
export default Image;