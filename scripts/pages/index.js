    // async function getPhotographers() {
    //     // Penser à remplacer par les données récupérées dans le json
    //     const photographers = [
    //         {
    //             "name": "Ma data test",
    //             "id": 1,
    //             "city": "Paris",
    //             "country": "France",
    //             "tagline": "Ceci est ma data test",
    //             "price": 400,
    //             "portrait": "account.png"
    //         },
    //         {
    //             "name": "Autre data test",
    //             "id": 2,
    //             "city": "Londres",
    //             "country": "UK",
    //             "tagline": "Ceci est ma data test 2",
    //             "price": 500,
    //             "portrait": "account.png"
    //         },
    //     ]
    //     // et bien retourner le tableau photographers seulement une fois
    //     return ({
    //         photographers: [...photographers, ...photographers, ...photographers]})
    // }

    // async function displayData(photographers) {
    //     const photographersSection = document.querySelector(".photographer_section");

    //     photographers.forEach((photographer) => {
    //         const photographerModel = photographerFactory(photographer);
    //         const userCardDOM = photographerModel.getUserCardDOM();
    //         photographersSection.appendChild(userCardDOM);
    //     });
    // };

    // async function init() {
    //     // Récupère les datas des photographes
    //     const { photographers } = await getPhotographers();
    //     displayData(photographers);
    // };
    
    // init();



    // collect photographers data
   
    function getPhotographers () {
      fetch('../data/photographers.json')
     .then( res => res.json())
     .then(data => {
        let photographers = data.photographers;
        console.log(photographers);
        photographers.forEach((photographer) => {                
        document.querySelector('.photographer_section').innerHTML += createCard(photographer)
            });
        })       
    } 

   function createCard(photographer){
    return `
    <article>
        <a>
            <img src='../assets/photographers/${photographer.portrait}'/>
            <h2>${photographer.name}</h2>
        </a>
        <h3>${photographer.city}, ${photographer.country}</h3>
        <p>${photographer.tagline}</p>
        <h4>${photographer.price}/jour</h4>

    </article>
            `;
    }
    
getPhotographers();
    
  