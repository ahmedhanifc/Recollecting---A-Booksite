const checkPasswordLength = function (password) {
  if (password.length >= 8) {
    return true;
  }
  return false;
};

const checkPasswordForLetter = function (password) {
  for (let i = 0; i < password.length; i++) {
    console.log(i);
  }
};
