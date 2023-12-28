function findMostFrequentItem(array) {
  const counts = {};

  for (const item of array) {
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }

  let mostFrequentItem = null;
  let maxCount = 0;

  for (const item in counts) {
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostFrequentItem = item;
    }
  }

  return mostFrequentItem;
}

const array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const mostFrequentItem = findMostFrequentItem(array);
console.log(mostFrequentItem); // Output: 'a'
