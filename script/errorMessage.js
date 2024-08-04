const name_error_message = document.querySelector(".name-error-message");
const password_error_message = document.querySelector(
  ".password-error-message"
);
const password_confirmation_error_message = document.querySelector(
  ".password-confirmation-error-message"
);
const email_error_message = document.querySelector(".email-error-message");
const email_confirmation_error_message = document.querySelector(
  ".email-confirmation-error-message"
);
const phone_error_message = document.querySelector(".phone-error-message");
const age_error_message = document.querySelector(".age-error-message");
const calendar_error_message = document.querySelector(
  ".calendar-error-message"
);
const address_error_message = document.querySelector(".address-error-message");

const createErrorMessage = function (entryThatIsInvalid) {
  if (entryThatIsInvalid == "isNameValid") {
    name_error_message.innerText =
      "**Name and Username Must only be composed of Letters";
  }
  if (entryThatIsInvalid == "isPasswordValid") {
    password_error_message.innerText =
      "**Password must be at least eight characters long, and must contain at least one letter, one number and one special character.";
    password_confirmation_error_message.innerText =
      "**Confirmation Password must be equal to original Password";
  }
  if (entryThatIsInvalid == "isEmailValid") {
    email_error_message.innerText =
      " Email must contain the @ character, followed by at least two other characters, followed by .edu.qa at the end";
    email_confirmation_error_message.innerText =
      "Confirmation Email must be equal to Original Email";
  }
  if (entryThatIsInvalid == "isPhoneValid") {
    phone_error_message.innerText =
      "The Phone must contain digits only conforming to the Qatari phone number format";
  }
  if (entryThatIsInvalid == "isAgeValid") {
    age_error_message.innerText = "Age must be between 18 and 100";
  }
  if (entryThatIsInvalid == "isCalendarValid") {
    calendar_error_message.innerText = "Age must match with field";
  }
  if (entryThatIsInvalid == "isAddressValid") {
    address_error_message.innerText =
      "The building number must be a number between 1 and 666";
  }
};

const removeErrorMessage = function (entryThatIsValid) {
  if (entryThatIsValid == "isNameValid") {
    name_error_message.innerText = "";
  }
  if (entryThatIsValid == "isPasswordValid") {
    password_error_message.innerText = "";
    password_confirmation_error_message.innerText = "";
  }
  if (entryThatIsValid == "isEmailValid") {
    email_error_message.innerText = "";
    email_confirmation_error_message.innerText = "";
  }
  if (entryThatIsValid == "isPhoneValid") {
    phone_error_message.innerText = "";
  }
  if (entryThatIsValid == "isAgeValid") {
    age_error_message.innerText = "";
  }
  if (entryThatIsValid == "isCalendarValid") {
    calendar_error_message.innerText = "";
  }
  if (entryThatIsValid == "isAddressValid") {
    address_error_message.innerText = "";
  }
};

const errorMessageValidation = function () {
  let truth_counter = 0;
  for (const [key, value] of Object.entries(isFormValid)) {
    if (value == false) {
      createErrorMessage(key);
    }
    if (value == true) {
      removeErrorMessage(key);
      truth_counter += 1;
    }
  }
  if (truth_counter == 8) {
    subscribeButton["type"] = "submit";
  }
};

subscribeButton.addEventListener("click", errorMessageValidation);
