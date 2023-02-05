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
const validationModal = document.querySelector(".validation-modal");
const form = document.querySelector("form");
const modalBody = document.querySelector(".modal-body");
const validClose = document.getElementById("validation-close");
const modalSubmitBtn = document.querySelector(".btn-submit");

// launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));

// close modal
modalCloseBtn[0].addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Error messages array
const errors = {
  allFilled: "Tous les champs doivent-être renseignés.",
  invalidFirst: "Le prénom ne doit comporter que des lettres ou des tirets.",
  minFirstLetters: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  invalidLast: "Le nom ne doit comporter que des lettres ou des tirets.",
  minLastLetters: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  invalidMail: "L'adresse email n'est pas valide.",
  invalidDate: "La date de naissance renseignée n'est pas valide.",
  invalidQuantity: "Veuillez renseigner votre nombre de participation.",
  invalidCity: "Vous devez choisir une ville.",
  invalidCGU: "<br>Vous devez acceptez les termes et conditions pour participer.",
};

// Checking inputs with regex
const regexName = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexBirthdate = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;
const regexQuantity = /^[0-9]*$/;

// Condition to check all the fields
let errorField = 0;

function filledField() {
  for (let i = 0; i < textControl.length; i++) {
    // Checking that the fields are filled
    if (textControl[i].value == "") {
      errorEmptyField.textContent = errors.allFilled;
      errorEmptyField.style.fontSize = "14px";
      errorField = 1;
    } else {
      errorField = 0;
    };
  }
}

// Checking firstname input
let errorFirst = 0;

function firstName() {
  if (regexName.test(first.value) == false && first.value != "") {
    const errorFirstName = document.getElementById("errorFirstName");
    errorFirstName.textContent = errors.invalidFirst;
    first.className = "text-control error-border";
    errorFirst = 1;
  } else if (first.value.length <= 1) {
    errorFirstName.textContent = errors.minFirstLetters;
    first.className = "text-control error-border";
    errorFirst = 1;
  } else {
    errorFirstName.textContent = "";
    first.className = "text-control";
    errorFirst = 0;
  }
};

first.oninput = () => {
  firstName();
};

first.addEventListener("focusout", () => {
  firstName();
});

// Checking lastname input
let errorLast = 0;

function lastName() {
  if (regexName.test(last.value) == false && last.value != "") {
    const errorLastName = document.getElementById("errorLastName");
    errorLastName.textContent = errors.invalidLast;
    last.className = "text-control error-border";
    errorLast = 1;
  } else if (last.value.length <= 1) {
    errorLastName.textContent = errors.minLastLetters;
    last.className = "text-control error-border";
    errorLast = 1;
  } else {
    errorLastName.textContent = "";
    last.className = "text-control";
    errorLast = 0;
  }
};

last.oninput = () => {
  lastName();
};

last.addEventListener("focusout", () => {
  lastName();
});

// Checking email input
let errorMail = 0;

function mailAddress() {
  if (regexEmail.test(email.value) == false || email.value == "") {
    const errorEmail = document.getElementById("errorEmail");
    errorEmail.textContent = errors.invalidMail;
    email.className = "text-control error-border";
    errorMail = 1;
  } else {
    errorEmail.textContent = "";
    email.className = "text-control";
    errorMail = 0;
  }
};

email.oninput = () => {
  mailAddress();
};

email.addEventListener("focusout", () => {
  mailAddress();
});

// Checking birthdate input
let errorBirth = 0;

function dateOfBirth() {
  if (regexBirthdate.test(birthdate.value) == false) {
    const errorBirthdate = document.getElementById("errorBirthdate");
    errorBirthdate.textContent = errors.invalidDate;
    birthdate.className = "text-control error-border";
    errorBirth = 1;
  } else {
    errorBirthdate.textContent = "";
    birthdate.className = "text-control";
    errorBirth = 0;
  }
};

birthdate.oninput = () => {
  dateOfBirth();
};

birthdate.addEventListener("focusout", () => {
  dateOfBirth();
});


// Checking the number of participations
let errorParticipations = 0;

function numberOfParticipations() {
  if (regexQuantity.test(quantity.value) == false || quantity.value == "") {
    errorQuantity.textContent = errors.invalidQuantity;
    quantity.className = "text-control error-border";
    errorParticipations = 1;
  } else {
    errorQuantity.textContent = "";
    quantity.className = "text-control";
    errorParticipations = 0;
  }
};

quantity.onchange = () => {
  numberOfParticipations();
};

quantity.addEventListener("focusout", () => {
  numberOfParticipations();
});

// Checking the city choice
let errorCities = 0;

function cityParticipation() {
  let valid = false;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
      valid = true
    }
  }

  if (valid) {
    const errorCity = document.getElementById("errorCity");
    errorCity.textContent = "";
    errorCities = 0;
  } else {
    errorCity.textContent = errors.invalidCity;
    errorCities = 0;
  }
};

cities.forEach((btn) =>
  btn.addEventListener("change", () => {
    const checkedButtons = document.querySelector("input[name='location']:checked");
    if (checkedButtons != null) {
      const errorCity = document.getElementById("errorCity");
      errorCity.textContent = "";
    } else {
      errorCity.textContent = errors.invalidCity;
    }
  })
);

// Checking checkbox GTU input
let errorCheck = 0;

function checkedCGU() {
  if (checkboxGtu.checked == false) {
    checkboxEmpty.innerHTML = errors.invalidCGU;
    errorCheck = true;
  } else {
    checkboxEmpty.textContent = "";
    errorCheck = 0;
  }
};

checkboxGtu.addEventListener("change", function() {
  this.checked ? (checkboxEmpty.textContent = "") : (checkboxEmpty.innerHTML = errors.invalidCGU);
});

modalSubmitBtn.addEventListener("click", (e) => {
// Checking that there is no error detected
  firstName();
  lastName();
  mailAddress();
  dateOfBirth();
  numberOfParticipations();
  cityParticipation();
  checkedCGU();
  filledField();
  e.preventDefault();
  if (errorField + errorFirst + errorLast + errorMail + errorBirth + errorParticipations + errorCities + errorCheck == 0) {
    form.style.display = "none";
    validationModal.className = "validation-block";
    modalBody.classList.add("validation");
  }
});

// Submitting form
document.querySelector(".btn-close-form").addEventListener("click", () => {
  form.submit();
});
