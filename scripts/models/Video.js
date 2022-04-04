class Video{
    constructor(data, photographer){
       this.id =  data.id;
       this.photographer = photographer;
       this.title = data.title;
       this.video = data.video;
       this.likes = data.likes;
       this.date = data.date;
       this.price = data.price
    }
    render() {
        return `
            <article class='gallery-block-item'>
                <video class='media'controls>
                    <source src='../assets/images/${this.photographer.name}/${this.video}' class='media' />
                </video>
                <div class="gallery-item-title">
                    <p class='gallery_item-title'>${this.title}</p>
                    <p  class='gallery_item-likes'>${this.likes}
                    <i class="fa-solid fa-heart "></i>
                    </p>
                </div>
            </article>`;
    }
}