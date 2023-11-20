const textField_email = document.querySelectorAll(".email");

const emailValidation = function () {
  let truth_counter = 0;
  let emailValidityStatus = {
    isEmailNonEmpty: checkStringEquality(
      textField_email[0].value,
      textField_email[1].value
    ),
    isAstericPresent: false,
    hasTwoCharactersAfterAsteric: false,
    // hasDomain: false,
    // areEmailEqual: false,
  };

  if (emailValidityStatus["isEmailNonEmpty"] == true) {
    textField_email.forEach((email) => {
      emailValidityStatus["isAstericPresent"] = checkForAsteric(email.value);
      emailValidityStatus["hasTwoCharactersAfterAsteric"] =
        checkForCharactersAfterAsteric(email.value);
    });
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
