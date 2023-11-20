const textField_userAge = document.querySelector("#user_age");

const ageValidation = function () {
  let truth_counter = 0;
  let ageValidityStatus = {
    isAgeNonEmpty: false,
    isLetterNotPresent: false,
    isRangeValid: false,
  };

  ageValidityStatus["isAgeNonEmpty"] = checkForStringEmptiness(
    textField_userAge.value
  );
  ageValidityStatus["isLetterNotPresent"] = !checkForLetter(
    textField_userAge.value
  );
  ageValidityStatus["isRangeValid"] = checkForRange(
    textField_userAge.value,
    18,
    100
  );
  for (const [key, value] of Object.entries(ageValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }
  if (truth_counter == 3) {
    isFormValid["isAgeValid"] = true;
  } else {
    isFormValid["isAgeValid"] = false;
  }
};

subscribeButton.addEventListener("click", ageValidation);
