const name_error_message = document.querySelector(".name-error-message");
const password_error_message = document.querySelector(
  ".password-error-message"
);

const createErrorMessage = function (entryThatIsInvalid) {
  let errorMessage;
  if (entryThatIsInvalid == "isNameValid") {
    name_error_message.innerText =
      "**Name and Username Must only be composed of Letters";
  }
  if (entryThatIsInvalid == "isPasswordValid") {
    password_error_message.innerText =
      "**Password must be at least eight characters long, and must contain at least one letter, one number and one special character.";
  }
};

const errorMessageValidation = function () {
  for (const [key, value] of Object.entries(isFormValid)) {
    if (value == false) {
      createErrorMessage(key);
    }
  }
};

subscribeButton.addEventListener("click", errorMessageValidation);
