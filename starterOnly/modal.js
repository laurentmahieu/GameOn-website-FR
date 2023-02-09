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
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalbg.style.display = "block";
  })
);

// close modal
modalCloseBtn[0].addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Error messages Object
const errors = {
  invalidFirst: "Le prénom ne doit comporter que des lettres ou des tirets.",
  minFirstLetters: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  invalidLast: "Le nom ne doit comporter que des lettres ou des tirets.",
  minLastLetters: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  invalidMail: "L'adresse email n'est pas valide.",
  invalidDate: "La date de naissance renseignée n'est pas valide.",
  invalidQuantity: "Veuillez renseigner votre nombre de participation.",
  invalidCity: "Vous devez choisir une ville.",
  invalidGtu: "<br>Vous devez acceptez les termes et conditions pour participer.",
};

// Checking inputs with regex
const regexName = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexBirthdate =
  /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;
const regexQuantity = /^[0-9]*$/;

// Checking firstname input
function checkErrorFirst(textContent, className, firstError) {
  errorFirstName.textContent = textContent;
  first.className = className;
  errorFirst = firstError;
}

let errorFirst = 0;

function checkFirstname() {
  if (regexName.test(first.value) === false && first.value !== "") {
    const errorFirstName = document.getElementById("errorFirstName");
    checkErrorFirst(errors.invalidFirst, "text-control error-border", 1);
  } else if (first.value.length <= 1) {
    checkErrorFirst(errors.minFirstLetters, "text-control error-border", 1);
  } else {
    checkErrorFirst("", "text-control", 0);
  }
}

//--- methods to check instantly during writting in the field
first.oninput = () => {
  checkFirstname();
};

first.addEventListener("focusout", () => {
  checkFirstname();
});

// Checking lastname input
function checkErrorLast(textContent, className, lastError) {
  errorLastName.textContent = textContent;
  last.className = className;
  errorLast = lastError;
}

let errorLast = 0;

function checkLastname() {
  if (regexName.test(last.value) === false && last.value !== "") {
    const errorLastName = document.getElementById("errorLastName");
    checkErrorLast(errors.invalidLast, "text-control error-border", 1);
  } else if (last.value.length <= 1) {
    checkErrorLast(errors.minLastLetters, "text-control error-border", 1);
  } else {
    checkErrorLast("", "text-control", 0);
  }
}

last.oninput = () => {
  checkLastname();
};

last.addEventListener("focusout", () => {
  checkLastname();
});

// Checking email input
function checkErrorMail(textContent, className, mailError) {
  errorEmail.textContent = textContent;
  email.className = className;
  errorMail = mailError;
}

let errorMail = 0;

function checkMail() {
  if (regexEmail.test(email.value) === false || email.value === "") {
    const errorEmail = document.getElementById("errorEmail");
    checkErrorMail(errors.invalidMail, "text-control error-border", 1);
  } else {
    checkErrorMail("", "text-control", 0);
  }
}

email.oninput = () => {
  checkMail();
};

email.addEventListener("focusout", () => {
  checkMail();
});

// Checking birthdate input
function checkErrorBirthdate(textContent, className, dateError) {
  errorBirthdate.textContent = textContent;
  birthdate.className = className;
  errorBirth = dateError;
}
let errorBirth = 0;

function checkBirthdate() {
  if (regexBirthdate.test(birthdate.value) === false) {
    const errorBirthdate = document.getElementById("errorBirthdate");
    checkErrorBirthdate(errors.invalidDate, "text-control error-border", 1);
  } else {
    checkErrorBirthdate("", "text-control", 0);
  }
}

birthdate.oninput = () => {
  checkBirthdate();
};

birthdate.addEventListener("focusout", () => {
  checkBirthdate();
});

// Checking the number of participations
function checkErrorQuantity(textContent, className, quantityError) {
  errorQuantity.textContent = textContent;
  quantity.className = className;
  errorParticipations = quantityError;
}

let errorParticipations = 0;

function checkParticipations() {
  if (regexQuantity.test(quantity.value) === false || quantity.value === "") {
    checkErrorQuantity(errors.invalidQuantity, "text-control error-border", 1);
  } else {
    checkErrorQuantity("", "text-control", 0);
  }
}

quantity.onchange = () => {
  checkParticipations();
};

quantity.addEventListener("focusout", () => {
  checkParticipations();
});

// Checking the city choice
function checkErrorCity(textContent, cityError) {
  errorCity.textContent = textContent;
  errorCities = cityError;
}

let errorCities = 0;

function checkCity() {
  let valid = false;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
      valid = true;
    }
  }

  if (valid) {
    const errorCity = document.getElementById("errorCity");
    checkErrorCity("", 0);
  } else {
    checkErrorCity(errors.invalidCity, 1);
  }
}

cities.forEach((btn) =>
  btn.addEventListener("change", () => {
    const checkedButtons = document.querySelector("input[name='location']:checked");
    if (checkedButtons !== null) {
      const errorCity = document.getElementById("errorCity");
      errorCity.textContent = "";
    } else {
      errorCity.textContent = errors.invalidCity;
    }
  })
);

// Checking checkbox GTU input
let errorCheck = 0;

function checkGtu() {
  if (checkboxGtu.checked === false) {
    checkboxEmpty.innerHTML = errors.invalidGtu;
    errorCheck = 1;
  } else {
    checkboxEmpty.textContent = "";
    errorCheck = 0;
  }
}

checkboxGtu.addEventListener("change", function () {
  this.checked ? (checkboxEmpty.textContent = "") : (checkboxEmpty.innerHTML = errors.invalidGtu);
});

modalSubmitBtn.addEventListener("click", (e) => {
  // Checking that there is no errors detected
  checkFirstname();
  checkLastname();
  checkMail();
  checkBirthdate();
  checkParticipations();
  checkCity();
  checkGtu();
  e.preventDefault();
  if (
    errorFirst +
      errorLast +
      errorMail +
      errorBirth +
      errorParticipations +
      errorCities +
      errorCheck ===
    0
  ) {
    form.style.display = "none";
    validationModal.className = "validation-block";
    modalBody.classList.add("validation");
  }
});

// Submitting form
document.querySelector(".btn-close-form").addEventListener("click", () => {
  form.submit();
});
