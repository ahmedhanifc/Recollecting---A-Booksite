const textField_building_number = document.querySelector("#building_number");

const addressValidation = function () {
  let truth_counter = 0;
  let addressValidityStatus = {
    isAddressNonEmpty: false,
    isLetterNotPresent: false,
    isRangeValid: false,
  };

  addressValidityStatus["isAddressNonEmpty"] = checkForStringEmptiness(
    textField_building_number.value
  );
  addressValidityStatus["isLetterNotPresent"] = !checkForLetter(
    textField_building_number.value
  );

  addressValidityStatus["isRangeValid"] = checkForRange(
    textField_building_number.value,
    1,
    666
  );

  for (const [key, value] of Object.entries(addressValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }
  if (truth_counter == 3) {
    isFormValid["isPasswordValid"] = true;
  } else {
    isFormValid["isPasswordValid"] = false;
  }
};

subscribeButton.addEventListener("click", addressValidation);
