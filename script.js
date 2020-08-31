const form = document.forms['formWithValidation'];
const validateBtn = form.querySelector('.btn btn-primary text');
const fields = form.querySelectorAll('.field')

//find all inputs from your form
const email = form["EmailAddress"];
const password = form['password'];
const passwordConfirmation = form['password_confirm'];
const number = form["number"];
const country = form["country"];
const city = form["city"];
const address = form["address"];
const account = form["account"];

// add event listeners for all fields 
email.addEventListener('blur', emailVerify, true);

number.addEventListener('blur', numberVerify, true);

country.addEventListener('blur', countryVerify, true);

city.addEventListener('blur', cityVerify, true);

address.addEventListener('blur', addressVerify, true);

account.addEventListener('blur', accountVerify, true);


form.addEventListener('submit', function (event) {
  event.preventDefault();
  const errors = form.querySelectorAll('.error');

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      const error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerHTML = 'Field is required';
      form[i].parentElement.insertBefore(error, form[i].nextSibling);
    }
  }

  if (password.value !== passwordConfirmation.value) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = 'Passwords doesnt match';
    password.parentElement.insertBefore(error, password.nextSibling);
  }
})

const removeValidation = function () {
  const errors = form.querySelectorAll('.error');

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
}


function emailVerify() {
  if (email.value != "" && email.nextSibling.className ===  'error') {
    email.nextSibling.remove();
  }
}

function numberVerify() {
  if (number.value != "" && number.nextSibling.className ===  'error') {
    number.nextSibling.remove();
  }
}

function countryVerify() {
  if (country.value != "" && country.nextSibling.className ===  'error') {
    country.nextSibling.remove();
  }
}

function cityVerify() {
  if (city.value != "" && city.nextSibling.className ===  'error') {
    city.nextSibling.remove();
  }
}

function addressVerify() {
  if (address.value != "" && address.nextSibling.className ===  'error') {
    address.nextSibling.remove();
  }
}

function accountVerify() {
  if (account.value != "" && account.nextSibling.className ===  'error') {
    account.nextSibling.remove();
  }
}

/// convert to json
$(document).on('submit','form',function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});    
