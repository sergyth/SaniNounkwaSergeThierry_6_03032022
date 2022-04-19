import MediaFactory from "../factories/MediaFactory.js";
import { closeModal, displayModal } from "../utils/contactForm.js";
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
  displayProfile()
  {
    document.querySelector(".photograph-header").innerHTML =
    this.renderProfile();
    const likesBox = document.createElement("div");
    likesBox.classList.add("totalLikes");
    document.querySelector("#main").appendChild(likesBox);
    this.renderFormName();
   
  }
  renderFormName()
    {
      const name = document.createElement("span");
      name.innerHTML =this.photographer.name;
      document.querySelector('.contact-header').appendChild(name);
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
          <div class="dropdown-menu_sort">Trier par</div>
          <div id='dropdown-menu_block'>
            <div class="dropdown-menu_block-item">
              Popularité
              <span><i class="fa-solid fa-chevron-up "></i></span>
            </div>
            <div class="dropdown-menu_block-item">Date</div>
            <div class="dropdown-menu_block-item">Titre</div>
          </div>
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
    document.querySelector('.totalLikes').innerHTML = this.renderTotal(totalLikes);
   
  }
  listenForLikes() {
    document.querySelectorAll(".like-button").forEach((heart) =>
      heart.addEventListener("click", () => {
        let id =  heart.closest("article").getAttribute("data-id");
        let media = this.medias.find((media) => media.id == id);
        media.toggle();
        this.displayTotal();
      }),
    );
  }
  listenForContact()
    {
      document.querySelector('.contact_button').addEventListener('click', () =>{
        displayModal();
      })
    }
  listenForClosingModal()
    {
      document.querySelector('.close_button').addEventListener('click', () =>{
          closeModal();
          console.log('click');
        })
    }

  renderTotal(totalLikes) {
    return `
      <div>
        <span>${totalLikes}</span>
        <i class="fa-solid fa-heart "></i>
        <span class="totalLikes-price">${this.photographer.price}/Jour</span>  
      </div>`;
  }
}

export default Portfolio;
