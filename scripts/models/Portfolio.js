import MediaFactory from "../factories/MediaFactory.js";
import { closeModal, displayModal } from "../utils/contactForm.js";
class Portfolio {
  constructor() {
    this.medias = [];
    this.photographer = null;
    this.currentIndex = 0;
  }

  closeSlider() {
    document.getElementById("close_slider").addEventListener("click", () => {
      this.hideSlider();
    });
  }

  displayDropdownMenu() {
    document.querySelector("#main").innerHTML += this.renderDropdownMenu();
  }

  displayMedia() {
    const gallery = document.createElement("section");
    gallery.classList.add("gallery");
    document.querySelector("#main").appendChild(gallery);
    document.querySelector(".gallery").innerHTML = "";
    this.medias.forEach((media) => {
      document.querySelector(".gallery").innerHTML += media.render();
    });
  }

  displayLightbox() {
    document.getElementById("main").style.display = "none";
    document.getElementById("slider_wrapper").style.display = "flex";
    this.showMedia();
  }

  displayProfile() {
    document.querySelector(".photograph-header").innerHTML =
      this.renderProfile();
    const likesBox = document.createElement("div");
    likesBox.classList.add("totalLikes");
    document.querySelector("#main").appendChild(likesBox);
    this.renderFormName();
  }

  displayTotal() {
    let totalLikes = 0;
    this.medias.forEach((media) => {
      totalLikes += media.likes;
    });
    document.querySelector(".totalLikes").innerHTML =
      this.renderTotal(totalLikes);
  }

  hideSlider() {
    document.getElementById("main").style.display = "block";
    document.getElementById("slider_wrapper").style.display = "none";
  }

  hydrate(items, photographer) {
    this.photographer = photographer;
    let factory = new MediaFactory(photographer);
    items.forEach((item) => {
      this.medias.push(factory.build(item));
    });
  }

  listenForDropdownMenu() {
    document
      .getElementById("current-sort-wrapper")
      .addEventListener("click", () => {
        document.getElementById("current-sort-wrapper").style.display = "none";
        document.getElementById("sort-options").style.display = "block";
      });
    this.listenForSorting();
  }

  listenForClosingModal() {
    document.querySelector(".close_button").addEventListener("click", () => {
      closeModal();
    });
    this.listenForKeyDown();
  }

  listenForContact() {
    document.querySelector(".contact_button").addEventListener("click", () => {
      displayModal();
    });
    this.listenForClosingModal();
  }

  listenForLikes() {
    document.querySelectorAll(".like-button").forEach((heart) =>
   {   heart.addEventListener("click", () => {
        let id = heart.closest("article").getAttribute("data-id");
        let media = this.medias.find((media) => media.id == id);
        media.toggle();
        this.displayTotal();
       
      })
    });
  }
  
  listenForKeyDown() {
    document.addEventListener("keydown", (event) => {
      if (event.key == "Escape") {
        closeModal();
        this.hideSlider();
      }
      if (event.key == "ArrowRight") {
        this.next();
      }
      if (event.key == "ArrowLeft") {
        this.previous();
      }
    });
  }


  listenForSlider() {
    document.querySelectorAll(".media").forEach((media) => {
      media.addEventListener("click", () => {
        let id = media.closest("article").getAttribute("data-id");
        this.currentIndex = this.medias.findIndex((media) => media.id == id);
        this.startSlider();
      });
    });
  }
  listenForSorting() {
    document.querySelectorAll(".sort-option").forEach((option) => {
      option.addEventListener("click", () => {
        let sort = option.getAttribute("data-sort");
        document.getElementById("sort-options").style.display = "none";
        document.getElementById("current-sort-wrapper").style.display = "flex";
        document.getElementById("current-sort").innerText = sort;
        this.sortedBy(sort);
      });
    });
  }
  
  next(){
    if (this.currentIndex < this.medias.length - 1) {
      this.currentIndex++;
    } else {
     this.currentIndex = 0;
    }
    this.showSlide(this.currentIndex)
  }

  previous(){
    if (this.currentIndex == 0) {
      this.currentIndex = this.medias.length -1;
    } else if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.showSlide(this.currentIndex);
  }

  renderDropdownMenu() {
    return `
        <div class="dropdown-menu">
          <div class="dropdown-menu_title" aria-label='trier par'>Trier par</div>
          <div id='dropdown-menu_block'>
            <button class="dropdown-menu_block-item " id="current-sort-wrapper">
              <span id="current-sort" data-sort='Popularité' >Popularité</span>
              <span class='arrow'><i class="fa-solid fa-chevron-down "></i></span>
            </button>
          
            <div id="sort-options">
              <button class="dropdown-menu_block-item sort-option" data-sort ="Popularité">
                <span>Popularité</span>
                <span class='arrow'><i class="fa-solid fa-chevron-up "></i></span>
              </button>
              <button class="dropdown-menu_block-item sort-option" data-sort ="Titre">Titre</button>
              <button class="dropdown-menu_block-item sort-option" data-sort ="Date">Date</button>
            </div>  
          </div>
        </div>`;
  }

  renderFormName() {
    const name = document.createElement("span");
    name.innerHTML = this.photographer.name;
    document.querySelector(".contact-header").appendChild(name);
  }

  renderProfile() {
    return `
        <div>
            <h1>${this.photographer.name}</h1>   
            <h2>${this.photographer.city},  ${this.photographer.country}</h2>
            <p>${this.photographer.tagline}</p>
        </div>
        <div>
            <button class="contact_button" aria-label="contact Me">Contactez-moi</button>
        </div>
        <div>
            <img src='../assets/photographers/${this.photographer.portrait}' alt='' class='photographer-profile_img'/>
        </div>`;
  }

  renderTotal(totalLikes) {
    return `
        <div>
          <span>${totalLikes}</span>
          <i class="fa-solid fa-heart " role='img' aria-hidden="true"></i>
          <span class="totalLikes-price">${this.photographer.price}/Jour</span>  
        </div>`;
  }

  showMedia() {
    document.getElementById("lightbox").innerHTML =
      this.medias[this.currentIndex].renderLightbox();
  }

  showSlide() {
    this.showMedia();
  }

  sortedBy(order = "Popularité") {
    if (order === "Titre") {
      this.medias.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }

        if (b.title < a.title) {
          return 1;
        }
      });
    }

    if (order === "Date") {
      this.medias.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }

        if (b.date < a.date) {
          return 1;
        }
      });
    }

    if (order === "Popularité") {
      this.medias.sort((a, b) => {
        if (a.likes < b.likes) {
          return 1;
        }

        if (b.likes < a.likes) {
          return -1;
        }
      });
    }
    this.displayMedia();
    this.listenForLikes();
    this.listenForSlider();
  }

  startSlider() {
    this.displayLightbox();
    document.getElementById("next").addEventListener("click", () => {
      this.next();
    });
    document.getElementById("previous").addEventListener("click", () => {
      this.previous();
    });
  
    this.closeSlider();
  } 

}

export default Portfolio;
