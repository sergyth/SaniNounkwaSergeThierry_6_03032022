//Mettre le code JavaScript lié à la page photographer.html

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const id = params.id
  

/*data photographers
*/

    fetch('../data/photographers.json')
    .then((res) => res.json())
    .then((data)=> {
        let photographer = data.photographers.find(item => item.id == id);
        console.log(data)
        let medias = data.media.filter(item => item.photographerId == id);
        console.log(medias);
        document.querySelector('.photograph-header').innerHTML += displayProfile(photographer);
        document.querySelector('#main').innerHTML += displayDropdownMenu();
        const gallery = document.createElement('section');
        gallery.classList.add('gallery');
        document.querySelector('#main').appendChild(gallery);
        let totalLikes = 0;
        medias.forEach(media => {
          totalLikes += media.likes
          if(media.image){
            
            document.querySelector('.gallery').innerHTML += displayGallery(media);
          }
          
        })
       const likesBox = document.createElement('div');
       likesBox.classList.add('totalLikes');
       likesBox.innerHTML = displayLikes(photographer,totalLikes);
       document.querySelector('#main').appendChild(likesBox);
       

    });

    function displayProfile(photographer) {
      
      return`
          <div>
            <h1>
              ${photographer.name}
            </h1>
              
            <h2>
              ${photographer.city},  ${photographer.country}
            </h2>
            <p>
              ${photographer.tagline}
            </p>

          </div>
          <div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
          </div>
          <div>
            <img src='../assets/photographers/${photographer.portrait}' class='photographer-profile_img'/>
          </div>
          
       `
    }

    function displayDropdownMenu (){
      return`
        <div class="dropdown-menu">
          <label for ="dropdown-menu_block">Trier par</label>
          <select id='dropdown-menu_block'>
            <i class="fa-solid fa-circle-chevron-up fa-3x"></i> 
            <option value ='popularité' class="dropdown-menu_block-item">Popularité</option>
            <option value ='Date' class="dropdown-menu_block-item">Date</option>
            <option value ='Titre' class="dropdown-menu_block-item">Titre</option>
          </select>
        </div>
      `
    }
    function displayGallery(media){
      return `
      
        <article class='gallery-block-item'>
          <img src='../assets/images/${media.image}' class='gallery-img'/>
          <div class="gallery-item-title">
            <p class='gallery_item-title'>${media.title}</p>
            <p  class='gallery_item-likes'>${media.likes}
              <i class="fa-solid fa-heart "></i>
            </p>
          </div>

        </article>        
      `
    }
    function displayLikes(photographer, totalLikes){
      return`
        <div>
          <span>${totalLikes}</span>
          <span>${photographer.price}/Jour</span>  
        </div>

      `
    }
    
