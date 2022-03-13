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
        console.log(photographer.id);
        console.log(data)
        let medias = data.media.find(item => item.photographerId == id);
        console.log(medias);
        document.querySelector('.photograph-header').innerHTML += displayProfile(photographer);
        document.querySelector('#main').innerHTML.appendChild += displayDropdownMenu()

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
