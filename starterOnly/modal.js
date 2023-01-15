function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const textControl = document.querySelectorAll(".text-control");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const checkBoxGtu = document.getElementById("checkbox1");
const checkBoxEmpty = document.getElementById("checkbox-empty");
const cities = document.querySelectorAll(".city");
const errorEmptyField = document.getElementById("errorEmptyField");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
modalCloseBtn[0].addEventListener("click", closeModal);

// Error messages array
let errors = [
  "Tous les champs doivent-être renseignés.",
  "Le prénom ne doit comporter que des lettres ou des tirets.",
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  "Le nom ne doit comporter que des lettres ou des tirets.",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "L'adresse email n'est pas valide.",
  "La date de naissance renseignée n'est pas valide.",
  "Vous devez choisir une option",
  "Vous devez vérifier que vous acceptez les termes et conditions."
];

// Checking form validation
document.getElementById("validation-form").addEventListener("submit", (e) => {

  // Error variable initialized
  let error;

  // Checking inputs with regex
  let regexName = /^[a-zA-Z-\s]+$/;

  // Condition to check all the fields
  for (let i = 0; i < textControl.length; i++) {
    // Checking that the fields are filled
    if (textControl[i].value == "") {
      error = true;
      errorEmptyField.innerHTML = errors[0];
      errorEmptyField.style.fontSize = "16px";
    } else {
      errorEmptyField.innerHTML = "";
    }

    // Checking firstname input
    if (regexName.test(first.value) == false && first.value != "") {
      const errorFirstName = document.getElementById("errorFirstName");
      error = true;
      errorFirstName.textContent = errors[2];
    } else if (first.value.length <= 1) {
      error = true;
      errorFirstName.textContent = errors[2];
    } else {
      errorFirstName.textContent = "";
    }
  }

  if (error) {
    e.preventDefault();
    return false;
  }
});
