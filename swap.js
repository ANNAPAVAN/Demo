function swapCase(str) {
  let swappedString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swappedString += str[i].toLowerCase();
    } else {
      swappedString += str[i].toUpperCase();
    }
  }
  return swappedString;
}

const inputString = "The Quick Brown Fox";
const swappedString = swapCase(inputString);
console.log(swappedString); // Output: tHEqUICKbROWNfOX
