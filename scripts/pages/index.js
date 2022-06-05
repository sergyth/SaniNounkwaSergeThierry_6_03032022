function getPhotographers () {
  fetch('../data/photographers.json')
    .then((res) => res.json())
    .then((data) => {
      const photographers = data.photographers
      photographers.forEach((photographer) => {
        document.querySelector('.photographer_section').innerHTML +=
          createCard(photographer)
      })
    })
}

function createCard (photographer) {
  return `
    <article>
        <a href='photographer.html?id=${photographer.id}' tabindex="0">
            <img src='../assets/photographers/${photographer.portrait}' alt="${photographer.name}" />
            <h2>${photographer.name}</h2>
        </a>
        <div tabindex="0">
            <h3>${photographer.city}, ${photographer.country}</h3>
            <p>${photographer.tagline}</p>
            <h4>${photographer.price}/jour</h4>
        </div>

    </article>
            `
}

getPhotographers()
