const subscribeButton = document.querySelector(".subscribe-submit-button ");
const textFields = document.querySelectorAll(".text_fields");
const textField_nameInput = document.querySelectorAll(".name");
const textField_password = document.querySelectorAll(".password");
const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters

const changeButtonType = function (button) {
  return (button["type"] = "submit");
};

const isNameValid = function () {
  let nameIsValid = true;
  textField_nameInput.forEach((field) => {
    for (let i = 0; i < field.value.length; i++) {
      // To ensure that there are no numbers in each index
      //   Source: (1)
      if (!/^[a-zA-Z]*$/.test(field.value)) {
        nameIsValid = false;
      }
    }
  });

  return nameIsValid;
};

const isFieldNotEmpty = function (givenField) {
  let fieldNotEmpty;
  givenField.forEach((field) => {
    if (!field.value) {
      fieldNotEmpty = false;
    } else {
      fieldNotEmpty = true;
    }
  });

  return fieldNotEmpty;
};

const areFieldsValid = function () {};

const isPasswordValid = function () {
  isFieldNotEmpty(textField_password);
};

// I want to loop over each and every field, and if it detects that the field is empty,
// I want a function to display a message over a span that i will create stating that the field is required,
// and at this moment in time, that field is empty.

subscribeButton.addEventListener("click", isFieldNotEmpty);
subscribeButton.addEventListener("click", isNameValid);
subscribeButton.addEventListener("click", isPasswordValid);
