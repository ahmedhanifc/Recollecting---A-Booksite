const textField_name = document.querySelectorAll(".name");

const nameValidation = function () {
  let truth_counter = 0;
  let nameValidityStatus = {
    isNameNonEmpty: false,
    isDigitNotPresent: false,
  };

  textField_name.forEach((name) => {
    nameValidityStatus["isNameNonEmpty"] = checkForStringEmptiness(name.value);
    nameValidityStatus["isDigitNotPresent"] = !checkForNumber(name.value);
  });

  for (const [key, value] of Object.entries(nameValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }
  if (truth_counter == 2) {
    isFormValid["isNameValid"] = true;
  } else {
    isFormValid["isNameValid"] = false;
  }
};

subscribeButton.addEventListener("click", nameValidation);
