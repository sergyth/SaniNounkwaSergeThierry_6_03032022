//Mettre le code JavaScript lié à la page photographer.html

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
const id = params.id;

/*data photographers
 */

fetch("../data/photographers.json")
  .then((res) => res.json())
  .then((data) => {
    let photographer = data.photographers.find((item) => item.id == id);
    let medias = data.media.filter((item) => item.photographerId == id);
    displayProfile(photographer);
    displayDropdownMenu();
    displayMedia(medias, photographer);
    displayTotal(photographer, medias);
  });

function displayProfile(photographer) {
  document.querySelector(".photograph-header").innerHTML =
    renderProfile(photographer);
}

function renderProfile(photographer) {
  return `
    <div>
      <h1>${photographer.name}</h1>   
      <h2>${photographer.city},  ${photographer.country}</h2>
      <p>${photographer.tagline}</p>
    </div>
    <div>
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    </div>
    <div>
      <img src='../assets/photographers/${photographer.portrait}' class='photographer-profile_img'/>
    </div>`;
}

function displayDropdownMenu() {
  document.querySelector("#main").innerHTML += renderDropdownMenu();
}

function renderDropdownMenu() {
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

function displayMedia(medias, photographer) {
  const gallery = document.createElement("article");
  gallery.classList.add("gallery");
  document.querySelector("#main").appendChild(gallery);
  medias.forEach((media) => {
    document.querySelector(".gallery").innerHTML += renderMedia( media, photographer);
  });

}

function renderMedia(media, photographer) {
  if (media.image) {
    return `
      <article class='gallery-block-item'>
        <img src='../assets/images/${photographer.name}/${media.image}' class='media' />
        <div class="gallery-item-title">
            <p class='gallery_item-title'>${media.title}</p>
            <p  class='gallery_item-likes'>${media.likes}
            <i class="fa-solid fa-heart "></i>
            </p>
        </div>
      </article>`;
  }

  if (media.video) {
    return `
      <article class='gallery-block-item'>
        <video controls class='media'>
            <source src="../assets/images/${photographer.name}/${media.video}" type="video/mp4" >   
        </video>
        <div class="gallery-item-title">
            <p class='gallery_item-title'>${media.title}</p>
            <p  class='gallery_item-likes'>${media.likes}
            <i class="fa-solid fa-heart "></i>
            </p>
        </div>
      </article>`;
  }
}
function displayTotal(photographer, medias){
  let totalLikes = 0;
  medias.forEach(media => {
    totalLikes += media.likes;
  })
  const likesBox = document.createElement("div");
  likesBox.classList.add("totalLikes");
  likesBox.innerHTML = renderTotal(photographer, totalLikes);
  document.querySelector("#main").appendChild(likesBox);
}
function renderTotal(photographer, totalLikes) {
  return `
    <div>
      <span>${totalLikes}</span>
      <i class="fa-solid fa-heart "></i>
      <span class="totalLikes-price">${photographer.price}/Jour</span>  
    </div>`;
}
