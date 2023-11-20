const radioButtons = document.querySelectorAll("input[type = radio]");

const radioValidation = function () {
  let truth_counter = 0;
  let radioValidityStatus = {
    isRadioSelected: false,
  };
  if (radioButtons[0].checked) {
    radioValidityStatus["isRadioSelected"] = true;
    truth_counter++;
  } else if (radioButtons[1].checked) {
    radioValidityStatus["isRadioSelected"] = true;
    truth_counter++;
  }

  if (truth_counter == 1) {
    isFormValid["isRadioButtonsValid"] = true;
  } else {
    isFormValid["isRadioButtonsValid"] = false;
  }
};

subscribeButton.addEventListener("click", radioValidation);
