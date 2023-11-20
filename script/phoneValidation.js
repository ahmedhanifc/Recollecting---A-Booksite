const textField_phone = document.querySelector("#user_phone");

const phoneValidation = function () {
  let truth_counter = 0;
  let phoneValidityStatus = {
    isPhoneNonEmpty: checkPhoneFormat(textField_phone.value),
    hasNoLetters: !checkForLetter(textField_phone.value.slice(4)),
  };

  for (const [key, value] of Object.entries(phoneValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }
  if (truth_counter == 2) {
    isFormValid["isPhoneValid"] = true;
  } else {
    isFormValid["isPhoneValid"] = false;
  }
};

subscribeButton.addEventListener("click", phoneValidation);
