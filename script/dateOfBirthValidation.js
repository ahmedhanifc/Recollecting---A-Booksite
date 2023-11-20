const calendarField_dateOfBirth = document.querySelector("#user_birth");

const dateOfBirthValidation = function () {
  let truth_counter = 0;
  let age = textField_userAge.value;

  console.log(currentTime);
  let dateOfBirthValidityStatus = {
    isDateOfBirthNonEmpty: false,
    isAgeEqualToDateOfBirth: false,
  };
  dateOfBirthValidityStatus["isDateOfBirthNonEmpty"] = checkForStringEmptiness(
    calendarField_dateOfBirth.value
  );
};

subscribeButton.addEventListener("click", dateOfBirthValidation);
