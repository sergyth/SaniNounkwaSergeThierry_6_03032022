//Mettre le code JavaScript lié à la page photographer.html

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const id = params.id

/*data photographers
*/
function getPhotographer(){
    fetch('../data/photographers.json')
    .then((res) => res.json())
    .then((data)=> {
        let photographer = data.photographers.find(item => item.id === id);
        console.log(id);
        console.log(data);
        let medias = data.media.filter(item => item.photographerId === id);
        console.log(medias);
    });
}
getPhotographer();