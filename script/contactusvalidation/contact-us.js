const subscribeButton = document.querySelector(".subscribe-submit-button ");
const textFields = document.querySelectorAll(".text_fields");
// const textField_nameInput = document.querySelectorAll(".name");
const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters
let isFormValid = {
  isNameValid: false,
  isEmailValid: false,
  isPhoneValid: false,
  isTextFieldValid: false,
  isRadioButtonsValid: false,
};
