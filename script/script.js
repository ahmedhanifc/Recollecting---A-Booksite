const subscribeButton = document.querySelector(".subscribe-submit-button ");
const showPassword_checkbox = document.querySelector(".show-password");
const passwords = document.querySelectorAll(".password");
const textFields = document.querySelectorAll(".text_fields");
// const textField_nameInput = document.querySelectorAll(".name");
const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters

let isFormValid = {
  isNameValid: false,
  isPasswordValid: false,
  isEmailValid: false,
  isPhoneValid: false,
  isAddressValid: false,
  isAgeValid: false,
  isCalendarValid: false,
  isRadioButtonsValid: false,
};

showPassword_checkbox.addEventListener("click", () => {
  passwords.forEach((password) => {
    if (showPassword_checkbox.checked == true) {
      password["type"] = "text";
    } else if (showPassword_checkbox.checked == false) {
      password["type"] = "password";
    }
  });
});

// subscribeButton.addEventListener("click", () => console.log(isFormValid));
