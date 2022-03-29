class Portfolio{
    constructor(){
        this.medias        = [];
        this.photographer = null;
    }
    hydrate(medias, photographer){
        this.medias       = medias;
        this.photographer = photographer;
    }
    displayProfile()
     {
        document.querySelector(".photograph-header").innerHTML =
         this.renderProfile();
      }
      
    renderProfile() 
    {
        return `
            <div>
            <h1>${this.photographer.name}</h1>   
            <h2>${this.photographer.city},  ${this.photographer.country}</h2>
            <p>${this.photographer.tagline}</p>
            </div>
            <div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div>
            <img src='../assets/photographers/${this.photographer.portrait}' class='photographer-profile_img'/>
            </div>`;
    }
      
    displayDropdownMenu()
    {
        document.querySelector("#main").innerHTML += this.renderDropdownMenu();
    }
    
    renderDropdownMenu()
    {
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
      
    displayMedia()
    {
        const gallery = document.createElement("article");
        gallery.classList.add("gallery");
        document.querySelector("#main").appendChild(gallery);
        this.medias.forEach((media) => {
            document.querySelector(".gallery").innerHTML += this.renderMedia(media, this.photographer);
        });
        
    }
      
    renderMedia(media, photographer) 
    {
        if (media.image)
         {
            return `
            <article class='gallery-block-item'>
                <img src='../assets/images/${this.photographer.name}/${media.image}' class='media' />
                <div class="gallery-item-title">
                    <p class='gallery_item-title'>${media.title}</p>
                    <p  class='gallery_item-likes'>${media.likes}
                    <i class="fa-solid fa-heart "></i>
                    </p>
                </div>
            </article>`;
        }
        
        if (media.video)
         {
            return `
            <article class='gallery-block-item'>
                <video controls class='media'>
                    <source src="../assets/images/${this.photographer.name}/${media.video}" type="video/mp4" >   
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
    displayTotal()
    {
        let totalLikes = 0;
        this.medias.forEach(media => {
            totalLikes += media.likes;
        })
        const likesBox = document.createElement("div");
        likesBox.classList.add("totalLikes");
        likesBox.innerHTML = this.renderTotal(this.photographer, totalLikes);
        document.querySelector("#main").appendChild(likesBox);
    }

    renderTotal(photographer, totalLikes)
    {
        return `
            <div>
            <span>${totalLikes}</span>
            <i class="fa-solid fa-heart "></i>
            <span class="totalLikes-price">${this.photographer.price}/Jour</span>  
            </div>`;
    }
}