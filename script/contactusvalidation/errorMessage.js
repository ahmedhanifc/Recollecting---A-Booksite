const name_error_message = document.querySelector(".name-error-message");
const email_error_message = document.querySelector(".email-error-message");

const phone_error_message = document.querySelector(".phone-error-message");

const createErrorMessage = function (entryThatIsInvalid) {
  if (entryThatIsInvalid == "isNameValid") {
    name_error_message.innerText =
      "**Name and Username Must only be composed of Letters";
  }
  if (entryThatIsInvalid == "isEmailValid") {
    email_error_message.innerText =
      " Email must contain the @ character, followed by at least two other characters, followed by .edu.qa at the end";
  }
  if (entryThatIsInvalid == "isPhoneValid") {
    console.log(1);
    phone_error_message.innerText =
      "The Phone must contain digits only conforming to the Qatari phone number format";
  }
};

const removeErrorMessage = function (entryThatIsValid) {
  if (entryThatIsValid == "isNameValid") {
    name_error_message.innerText = "";
  }

  if (entryThatIsValid == "isEmailValid") {
    email_error_message.innerText = "";
  }
  if (entryThatIsValid == "isPhoneValid") {
    phone_error_message.innerText = "";
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
  if (truth_counter == 5) {
    subscribeButton["type"] = "submit";
  }
};

subscribeButton.addEventListener("click", errorMessageValidation);
