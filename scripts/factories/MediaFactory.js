import Media from '../models/Media.js';
import Video from '../models/Video.js';
import Image from '../models/Image.js';

class MediaFactory{
    constructor(photographer){
       this.photographer = photographer;
 
    }

    build(item){        
      return item.image? new Image(item, this.photographer) : new Video(item, this.photographer);
  }
}
export default MediaFactory;