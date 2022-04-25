import Media from './Media.js';
class Image extends Media{
    constructor(data, photographer){
     super(data, photographer)
       this.image = data.image;
     
    }
    render() {
        return `
            <article class='gallery-block-item' data-id= ${this.id}>
                <img src='../assets/images/${this.photographer.name}/${this.image}' class='media' />
                <div class="gallery-item-title">
                    <p class='gallery_item-title'>${this.title}</p>
                    <p  class='gallery_item-likes likes-count'>${this.likes}
                    <div class="like-button" >
                        <i class="fa-solid fa-heart ">
                        </i>
                    </div>
                    </p>
                </div>
            </article>`;
    }   
}
export default Image;