// Navbar Header

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
const quantity = document.getElementById("quantity");
const checkboxGtu = document.getElementById("checkbox1");
const checkboxEmpty = document.getElementById("checkbox-empty");
const cities = document.querySelectorAll(".radio-input");
const errorEmptyField = document.getElementById("errorEmptyField");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn[0].addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Error messages array
let errors = [
  "Tous les champs doivent-être renseignés.",
  "Le prénom ne doit comporter que des lettres ou des tirets.",
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  "Le nom ne doit comporter que des lettres ou des tirets.",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "L'adresse email n'est pas valide.",
  "La date de naissance renseignée n'est pas valide.",
  "Veuillez renseigner votre nombre de participation.",
  "Vous devez choisir une ville.",
  "<br>Vous devez acceptez les termes et conditions pour participer.",
];

// Checking form validation
document.getElementById("validation-form").addEventListener("submit", (e) => {

  // Error variable initialized
  let error;

  // Checking inputs with regex
  let regexName = /^[a-zA-Z-\s]+$/;
  let regexEmail = /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;
  let regexBirthdate = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;
  let regexQuantity = /^[0-9]*$/;

  // Condition to check all the fields
  for (let i = 0; i < textControl.length; i++) {
    // Checking that the fields are filled
    if (textControl[i].value == "") {
      error = true;
      errorEmptyField.textContent = errors[0];
      errorEmptyField.style.fontSize = "14px";
    } else {
      errorEmptyField.textContent = "";
    }

    // Checking firstname input
    if (regexName.test(first.value) == false && first.value != "") {
      const errorFirstName = document.getElementById("errorFirstName");
      error = true;
      errorFirstName.textContent = errors[1];
      textControl[0].style.border = "2px dashed #e54858";
    } else if (first.value.length <= 1) {
      error = true;
      errorFirstName.textContent = errors[2];
      textControl[0].style.border = "2px dashed #e54858";
    } else {
      errorFirstName.textContent = "";
      textControl[0].style.border = "none";
    }

    // Checking lastname input
    if (regexName.test(last.value) == false && last.value != "") {
      const errorLastName = document.getElementById("errorLastName");
      error = true;
      errorLastName.textContent = errors[3];
      textControl[1].style.border = "3px solid #e54858";
    } else if (last.value.length <= 1) {
      error = true;
      errorLastName.textContent = errors[4];
      textControl[1].style.border = "3px solid #e54858";
    } else {
      errorLastName.textContent = "";
      textControl[1].style.border = "none";
    }

    // Checking email input
    if (regexEmail.test(email.value) == false && email.value == "") {
      const errorEmail = document.getElementById("errorEmail");
      error = true;
      errorEmail.textContent = errors[5];
      textControl[2].style.border = "3px solid #e54858";
    } else {
      errorEmail.textContent = "";
      textControl[2].style.border = "none";
    }

    // Checking birthdate input
    if (regexBirthdate.test(birthdate.value) == false) {
      const errorBirthdate = document.getElementById("errorBirthdate");
      error = true;
      errorBirthdate.textContent = errors[6];
      textControl[3].style.border = "3px solid #e54858";
    } else {
      errorBirthdate.textContent = "";
      textControl[3].style.border = "none";
    }

    // Checking the number of participations
    if (regexQuantity.test(quantity.value) == false || quantity.value == "") {
      error = true;
      errorQuantity.textContent = errors[7];
      textControl[4].style.border = "3px solid #e54858";
    } else {
      errorQuantity.textContent = "";
      textControl[4].style.border = "none";
    }

    // Checking radiobutton city input
    let valid = false;
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].checked) {
        valid = true;
        const errorCity = document.getElementById("errorCity");
        errorCity.textContent = "";
        break
      } else {
        error = true;
        errorCity.textContent = errors[8];
        textControl[0].style.border = "3px solid #e54858";
      }
    }

    // Checking checkbox GTU input
    if (checkboxGtu.checked == false) {
      error = true;
      checkboxEmpty.innerHTML = errors[9];
      textControl[0].style.border = "3px solid #e54858";
    } else {
      checkboxEmpty.textContent = "";
    }
  }

  // Checking that there is no error detected
  if (error) {
    e.preventDefault();
    return false;
  }
});
