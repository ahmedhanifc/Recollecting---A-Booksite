const checkStringEquality = function (firstString, secondString) {
  if (firstString == "" || secondString == "" || firstString !== secondString) {
    return false;
  } else {
    return true;
  }
};

const checkStringLength = function (givenString, requiredLength) {
  if (givenString.length >= requiredLength) {
    return true;
  } else {
    return false;
  }
};

const checkForLetter = function (givenString) {
  for (let i = 0; i < givenString.length; i++) {
    if (isNaN(givenString[i])) {
      return true;
    } else {
      return false;
    }
  }
};
const checkForSpecialCharacter = function (givenString) {
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
