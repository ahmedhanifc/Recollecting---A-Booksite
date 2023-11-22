--------------------------------STYLING----------------------------

Header Background Color: #f8f3ed
Form Label Background Color: rgb(244 244 244);

<!-- To Do List -->

Add required tag to each field form as all are required

<!------------------------------------------------------------------------- -->

Citations
https://stackoverflow.com/questions/6800536/isalpha-replacement-for-javascript#comment8074480_6800786

(1) The regular expression /^[a-zA-Z]_$/ checks if the entire string consists of only letters. The ^ asserts the start of the string, [a-zA-Z]_ matches zero or more letters (both uppercase and lowercase), and the $ asserts the end of the string.

The test method is used to check if the regular expression matches the value of the form field. If the test fails (i.e., the field contains something other than letters), nameIsValid is set to false.

if (!/^[a-zA-Z]\*$/.test(field.value)) {
nameIsValid = false;
}

(2)
const checkForLetter = function (givenString) {
// The function takes a string as an input and checks whether it contains a letter {a,b,c,...}. Returns true if it does, false otherwise.
const regex = /[a-zA-Z]/; // Regular expression to match any letter (case-insensitive)

return regex.test(givenString);
};
This version uses a regular expression (/[a-zA-Z]/) to check if the string contains any letter, and it is case-insensitive. This approach provides a more accurate check for the presence of letters in the string.

<!-- ------------------------------------------------------------------------------------------- -->
