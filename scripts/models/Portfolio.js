import MediaFactory from "../factories/MediaFactory.js";
import { displayModal } from "../utils/contactForm.js";
class Portfolio {
  constructor() {
    this.medias = [];
    this.photographer = null;
  }
  hydrate(items, photographer) {
    this.photographer = photographer;
    let factory = new MediaFactory(photographer);
    items.forEach((item) => {
      this.medias.push(factory.build(item));
    });
  }
  displayProfile() {
    document.querySelector(".photograph-header").innerHTML =
      this.renderProfile();
  }

  renderProfile() {
    return `
            <div>
                <h1>${this.photographer.name}</h1>   
                <h2>${this.photographer.city},  ${this.photographer.country}</h2>
                <p>${this.photographer.tagline}</p>
            </div>
            <div>
                <button class="contact_button">Contactez-moi</button>
            </div>
            <div>
                <img src='../assets/photographers/${this.photographer.portrait}' class='photographer-profile_img'/>
            </div>`;
  }

  displayDropdownMenu() {
    document.querySelector("#main").innerHTML += this.renderDropdownMenu();
  }

  renderDropdownMenu() {
    return `
            <div class="dropdown-menu">
                <label for ="dropdown-menu_block">Trier par</label>
                <select id='dropdown-menu_block'>
                    <i class="fa-solid fa-circle-chevron-up fa-3x"></i> 
                    <option value ='popularité' class="dropdown-menu_block-item">Popularité</option>
                    <option value ='Date' class="dropdown-menu_block-item">Date</option>
                    <option value ='Titre' class="dropdown-menu_block-item">Titre</option>
                </select>
            </div>`;
  }

  displayMedia() {
    const gallery = document.createElement("article");
    gallery.classList.add("gallery");
    document.querySelector("#main").appendChild(gallery);
    this.medias.forEach((media) => {
      document.querySelector(".gallery").innerHTML += media.render();
    });
  }

  displayTotal() {
    let totalLikes = 0;
    this.medias.forEach((media) => {
      totalLikes += media.likes;
    });
    const likesBox = document.createElement("div");
    likesBox.classList.add("totalLikes");
    likesBox.innerHTML = this.renderTotal(this.photographer, totalLikes);
    document.querySelector("#main").appendChild(likesBox);
  }
  listenForLikes() {
    document.querySelectorAll(".like-button").forEach((heart) =>
      heart.addEventListener("click", () => {
        let id =  heart.closest("article").getAttribute("data-id");
        let media = this.medias.find((media) => media.id == id);
        media.toggle();
      }),
    );
  }

  renderTotal(photographer, totalLikes) {
    return `
            <div>
            <span>${totalLikes}</span>
            <i class="fa-solid fa-heart "></i>
            <span class="totalLikes-price">${this.photographer.price}/Jour</span>  
            </div>`;
  }
}

export default Portfolio;
