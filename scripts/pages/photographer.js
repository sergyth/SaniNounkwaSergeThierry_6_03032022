/* eslint-disable eqeqeq */

import Portfolio from '../models/Portfolio.js'

const id = getId()

fetch('../data/photographers.json')
  .then((res) => res.json())
  .then((data) => {
    const photographer = data.photographers.find((item) => item.id == id)
    const medias = data.media.filter((item) => item.photographerId == id)
    const portfolio = new Portfolio()
    portfolio.hydrate(medias, photographer)
    portfolio.displayProfile()
    portfolio.displayDropdownMenu()
    portfolio.displayMedia()
    portfolio.displayTotal()
    portfolio.listenForContact()
    portfolio.listenForDropdownMenu()
    portfolio.listenForLikes()
    portfolio.listenForSorting()
    portfolio.sortedBy()
  })

function getId () {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  })
  return params.id
}
