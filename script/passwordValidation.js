const textField_password = document.querySelectorAll(".password");
const passwordValidation = function () {
  let truth_counter = 0;

  let passwordValidityStatus = {
    arePasswordsEqual: checkStringEquality(
      textField_password[0].value,
      textField_password[1].value
    ),
    isLengthValid: false,
    isLetterPresent: false,
    isNumberPresent: false,
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
      passwordValidityStatus["isNumberPresent"] = checkForNumber(
        password.value
      );
    });
  }

  for (const [key, value] of Object.entries(passwordValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }
  if (truth_counter == 5) {
    isFormValid["isPasswordValid"] = true;
  } else {
    isFormValid["isPasswordValid"] = false;
  }
};

subscribeButton.addEventListener("click", passwordValidation);
