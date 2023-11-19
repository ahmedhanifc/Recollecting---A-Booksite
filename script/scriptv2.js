const subscribeButton = document.querySelector(".subscribe-submit-button ");
const textFields = document.querySelectorAll(".text_fields");
const textField_nameInput = document.querySelectorAll(".name");
const textField_password = document.querySelectorAll(".password");
const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters

const checkStringEquality = function (firstString, secondString) {
  if (firstString == "" || secondString == "" || firstString !== secondString) {
    return false;
  } else {
    return true;
  }
};

const checkStringLength = function (givenString, requiredLength) {
  if (givenString.length >= requiredLength) {
    return true;
  } else {
    return false;
  }
};

const checkForLetter = function (givenString) {
  for (let i = 0; i < givenString.length; i++) {
    if (isNaN(givenString[i])) {
      return true;
    } else {
      return false;
    }
  }
};
const checkForSpecialCharacter = function (givenString) {
  if (specialCharacters.test(givenString)) {
    return true;
  } else {
    return false;
  }
};

const passwordValidation = function () {
  let truth_counter = 0;

  let passwordValidityStatus = {
    arePasswordsEqual: checkStringEquality(
      textField_password[0].value,
      textField_password[1].value
    ),
    isLengthValid: false,
    isLetterPresent: false,
    isSpecialCharacterPresent: false,
  };

  if (passwordValidityStatus["arePasswordsEqual"] == true) {
    textField_password.forEach((password) => {
      passwordValidityStatus["isLengthValid"] = checkStringLength(
        password.value,
        8
      );
      passwordValidityStatus["isLetterPresent"] = checkForLetter(
        password.value
      );
      passwordValidityStatus["isSpecialCharacterPresent"] =
        checkForSpecialCharacter(password.value);
    });
  }

  for (const [key, value] of Object.entries(passwordValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }

  console.log(passwordValidityStatus);
  if (truth_counter == 4) {
    return true;
  } else {
    return false;
  }
};

subscribeButton.addEventListener("click", passwordValidation);
