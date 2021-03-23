// DOM elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// input Error message --showError()
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// show success message outline --showSuccess()
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email is valid
const checkEmail = function (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim().toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

// Check required fields
const checkRequiredFields = function (inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// get the field name function
const getFieldName = function (input) {
  return input.id.charAt(0).toUpperCase().slice(1);
};

// check Length of the fields ---username, password
const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

// password match function ---check passwords match
const checkPasswordsMatch = function (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match!");
  }
};

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequiredFields([username, email, password, password2]);
  checkLength(username, 3, 30);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
