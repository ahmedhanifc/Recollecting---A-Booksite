const textField_messageArea = document.querySelector("#user-message");

const textField_messageArea_validation = function () {
  let truth_counter = 0;
  let textField_messageArea_validityStatus = {
    isNonEmpty: checkForStringEmptiness(textField_messageArea.value),
  };

  if (textField_messageArea_validityStatus["isNonEmpty"] == true) {
    isFormValid["isTextFieldValid"] = true;
  }
};

subscribeButton.addEventListener("click", textField_messageArea_validation);
