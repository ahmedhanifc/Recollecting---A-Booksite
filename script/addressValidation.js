const textField_building_number = document.querySelector("#building_number");

const addressValidation = function () {
  let truth_counter = 0;
  let addressValidityStatus = {
    isAddressNonEmpty: false,
    letterIsNotPresent: false,
    isRangeValid: false,
  };

  addressValidityStatus["isAddressNonEmpty"] = checkForStringEmptiness(
    textField_building_number.value
  );
  addressValidityStatus["letterIsNotPresent"] = checkForLetter(
    textField_building_number.value
  );

  console.log(addressValidityStatus);
};

subscribeButton.addEventListener("click", addressValidation);
