//Mettre le code JavaScript lié à la page photographer.html


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
    console.log(portfolio)
    portfolio.displayProfile();
    portfolio.displayDropdownMenu();
    portfolio.displayMedia();
    portfolio.displayTotal();
  });


  function getId(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    return params.id
  }
