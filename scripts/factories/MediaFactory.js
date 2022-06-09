import Video from '../models/Video.js'
import Image from '../models/Image.js'

class MediaFactory {
  constructor (photographer) {
    this.photographer = photographer
  }

  // permet de creer un media en fonction du type de media

  build (item) {
    return item.image ? new Image(item, this.photographer) : new Video(item, this.photographer)
  }
}
export default MediaFactory
