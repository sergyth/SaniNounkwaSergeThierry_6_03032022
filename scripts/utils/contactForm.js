/* eslint-disable no-useless-escape */
/** elements du Dom */

const form = document.getElementById('myForm')
const modal = document.getElementById('contact_modal')
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
const email = document.getElementById('email')
const message = document.getElementById('message')

/** listener */

prenom.addEventListener('change', () => {
  isFirstnameValid(prenom)
})
nom.addEventListener('change', () => {
  isNameValid(nom)
})
email.addEventListener('change', () => {
  isEmailValid(email)
})
message.addEventListener('change', () => {
  isMessageValid(message)
})
form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateForm()
})

export function displayModal () {
  modal.style.display = 'flex'
  document.getElementById('prenom').focus()
}

export function closeModal () {
  modal.style.display = 'none'
}

/** validation du formulaire */
function isEmailValid (email) {
  const regexMail =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (!regexMail.test(email.value)) {
    email.classList.remove('valid')
    email.classList.add('invalid')
    alert('Entrez une email au format valide')
    return false
  } else {
    email.classList.remove('invalid')
    email.classList.add('valid')
    return true
  }
}

function isFirstnameValid (prenom) {
  if (prenom.value.length < 3) {
    prenom.classList.remove('valid')
    prenom.classList.add('invalid')
    alert('Entrez au moins trois caractères')
    return false
  }
  prenom.classList.remove('invalid')
  prenom.classList.add('valid')
  return true
}

function isMessageValid (message) {
  if (message.value.length < 10) {
    message.classList.remove('valid')
    message.classList.add('invalid')
    alert('Veuillez entrer un message ici')
    return false
  }
  message.classList.remove('invalid')
  message.classList.add('valid')
  return true
}

function isNameValid (nom) {
  if (nom.value.length < 3) {
    nom.classList.remove('valid')
    nom.classList.add('invalid')
    alert('Entrez au moins trois caractères')
    return false
  }
  nom.classList.remove('invalid')
  nom.classList.add('valid')
  return true
}

export function validateForm () {
  if (isFirstnameValid(prenom) && isNameValid(nom) && isEmailValid(email) && isMessageValid(message)) {
    console.log(`prenom ${prenom.value} \n nom ${nom.value}\n  email ${email.value} \n  message ${message.value}`)
    form.reset()
  }
}
