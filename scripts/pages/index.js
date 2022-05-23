   
   
    function getPhotographers () {
      fetch('../data/photographers.json')
     .then( res => res.json())
     .then(data => {
        let photographers = data.photographers;
        photographers.forEach((photographer) => {                
        document.querySelector('.photographer_section').innerHTML += createCard(photographer)
            });
        })       
    } 

   function createCard(photographer){
    return `
    <article>
        <a href='photographer.html?id=${photographer.id}'>
            <img src='../assets/photographers/${photographer.portrait}' alt="" aria-labelledby='${photographer.name}'/>
            <h2>${photographer.name}</h2>
        </a>
        <div>
            <h3>${photographer.city}, ${photographer.country}</h3>
            <p>${photographer.tagline}</p>
            <h4>${photographer.price}/jour</h4>
        </div>

    </article>
            `;
    }
    
getPhotographers();
    
  