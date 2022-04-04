class MediaFactory{
    constructor(photographer){
       this.photographer = photographer;
 
    }
    build(item){
             
        if(item.image)
        {
          return  new Image(item, this.photographer);
        }
       if(item.video)
        {
          return  new Video(item, this.photographer);
        }
    }
}