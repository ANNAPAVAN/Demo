function removeDuplicates(array) {
  // const uniqueSet = new Set(array.map((item) => item.toLowerCase()));
  // return Array.from(uniqueSet);
  s = new Set();
  for (const i of array) {
    s.add(i.toLowerCase());
  }
  return Array.from(s);
}

const originalArray = [
  "apple",
  "Apple",
  "BANANA",
  "Banana",
  "Banana",
  "grape",
  "orange",
];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray); // Output: ['apple', 'banana', 'grape', 'orange']
