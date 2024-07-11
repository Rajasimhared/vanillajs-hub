const form = document.getElementById("form");

const username = document.getElementById(".username");
const email = document.getElementById(".email");
const password = document.getElementById(".password");
const password2 = document.getElementById(".password2");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const checkLength = (field, min, max) => {
  if (field.value.length < min || field.value.length > max) {
    showError(field, `${field.id} should be between ${min}-${max}`);
  } else {
    showSuccess(field);
  }
};

const checkRequiredFields = (fields) => {
  fields.forEach((field) => {
    if (field.value.trim() === "") {
      showError(field, `${field.id} is required`);
    } else {
      showSuccess(field);
    }
  });
};

const checkValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }
};

const checkPasswordMatch = (pass1, pass2) => {
  if (pass1.value != pass2.value) {
    showError(pass2, "Passwords do not match");
  }
};

form.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  checkRequiredFields([
    this.username,
    this.email,
    this.password,
    this.password2,
  ]);

  checkLength(this.username, 3, 15);
  checkLength(this.password, 6, 15);
  checkValidEmail(this.email);
  checkPasswordMatch(this.password, this.password2);
});
