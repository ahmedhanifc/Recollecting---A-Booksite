const checkStringEquality = function (firstString, secondString) {
  if (firstString == "" || secondString == "" || firstString !== secondString) {
    return false;
  } else {
    return true;
  }
};

const checkPhoneFormat = function (givenString) {
  if (givenString.slice(0, 4) !== "+974") {
    return false;
  }
  let stringPostFix = givenString.slice(4);

  if (stringPostFix.length === 8) {
    return true;
  } else {
    return false;
  }
};

const checkStringLength = function (givenString, requiredLength) {
  if (givenString.length >= requiredLength) {
    return true;
  } else {
    return false;
  }
};

// (2)
const checkForLetter = function (givenString) {
  // The function takes a string as an input and checks whether it contains a letter {a,b,c,...}. Returns true if it does, false otherwise.
  const regex = /[a-zA-Z]/; // Regular expression to match any letter (case-insensitive)

  return regex.test(givenString);
};

const checkForNumber = function (givenString) {
  // The function takes a string as an input and checks whether it contains a number {1,2,3}, Returns true if it does, false otherwise
  for (let i = 0; i < givenString.length; i++) {
    if (!isNaN(givenString[i])) {
      return true;
    }
  }
  return false;
};

const checkForSpecialCharacter = function (givenString) {
  // The function takes a string as a parameter and checks whether it contains a special character
  if (specialCharacters.test(givenString)) {
    return true;
  } else {
    return false;
  }
};

const checkForAsteric = function (givenString) {
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i].includes("@")) {
      return true;
    }
  }
};

const checkForCharactersAfterAsteric = function (givenString) {
  let astericHasIndex = givenString.indexOf("@");
  let domainHasIndex = givenString.indexOf(".edu.qa");
  if (domainHasIndex === -1) {
    return false;
  }

  let newString = givenString.slice(astericHasIndex + 1, domainHasIndex);
  if (newString.length > 2) {
    return true;
  }
};

const checkForStringEmptiness = function (givenString) {
  givenString = givenString.trim();
  if (givenString.length == 0) {
    return false;
  } else {
    return true;
  }
};

const checkForRange = function (givenValue, minValue, maxValue) {
  if (givenValue < minValue || givenValue > maxValue) {
    return false;
  } else {
    return true;
  }
};
