const calendarField_dateOfBirth = document.querySelector("#user_birth");

const dateOfBirthValidation = function () {
  let truth_counter = 0;
  let currentAge = textField_userAge.value;
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - currentAge;
  const dateOfBirth = new Date(calendarField_dateOfBirth.value).getFullYear();

  let dateOfBirthValidityStatus = {
    isDateOfBirthNonEmpty: false,
    isAgeEqualToDateOfBirth: false,
  };
  dateOfBirthValidityStatus["isDateOfBirthNonEmpty"] = checkForStringEmptiness(
    calendarField_dateOfBirth.value
  );
  dateOfBirthValidityStatus["isAgeEqualToDateOfBirth"] = doYearsMatch(
    birthYear,
    dateOfBirth
  );

  for (const [key, value] of Object.entries(dateOfBirthValidityStatus)) {
    if (value) {
      truth_counter++;
    }
  }
  if (truth_counter == 2) {
    isFormValid["isCalendarValid"] = true;
  } else {
    isFormValid["isCalendarValid"] = false;
  }
};

subscribeButton.addEventListener("click", dateOfBirthValidation);
