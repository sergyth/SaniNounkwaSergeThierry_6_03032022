//Mettre le code JavaScript lié à la page photographer.html
import Portfolio from '../models/Portfolio.js';

const id = getId()

/*data photographers
 */

fetch("../data/photographers.json")
  .then((res) => res.json())
  .then((data) => {
    let photographer = data.photographers.find((item) => item.id == id);
    let medias = data.media.filter((item) => item.photographerId == id);
    let portfolio = new Portfolio();
    portfolio.hydrate(medias, photographer);
    portfolio.displayProfile();
    portfolio.displayDropdownMenu();
    portfolio.displayMedia();
    portfolio.displayTotal();
    portfolio.listenForLikes();
  });


  function getId(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    return params.id
  }
