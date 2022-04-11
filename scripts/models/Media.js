class Media{
    constructor(data, photographer){
        this.id =  data.id;
        this.photographer = photographer;
        this.title = data.title;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price
     }
}

export default Media;