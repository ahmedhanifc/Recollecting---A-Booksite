const textField_email = document.querySelector(".email");

const emailValidation = function () {
  let truth_counter = 0;
  let emailValidityStatus = {
    isEmailNonEmpty: checkForStringEmptiness(textField_email.value),
    isAstericPresent: false,
    hasTwoCharactersAfterAsteric: false,
    // hasDomain: false,
    // areEmailEqual: false,
  };

  if (emailValidityStatus["isEmailNonEmpty"] == true) {
    emailValidityStatus["isAstericPresent"] = checkForAsteric(
      textField_email.value
    );
    emailValidityStatus["hasTwoCharactersAfterAsteric"] =
      checkForCharactersAfterAsteric(textField_email.value);
  }
  for (const [key, value] of Object.entries(emailValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }
  if (truth_counter == 3) {
    isFormValid["isEmailValid"] = true;
  } else {
    isFormValid["isEmailValid"] = false;
  }
};

subscribeButton.addEventListener("click", emailValidation);
