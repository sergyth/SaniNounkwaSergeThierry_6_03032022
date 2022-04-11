import Media from '../models/Media.js';
import Video from '../models/Video.js';
import Image from '../models/Image.js';

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
export default MediaFactory;