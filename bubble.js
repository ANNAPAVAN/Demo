function bubbleSortWithTwoLoops(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap elements
      }
    }
  }

  return array;
}

// Example usage
const unsortedArray = [5, 2, 4, 1, 3];
console.log("Unsorted array:", unsortedArray);
const sortedArray = bubbleSortWithTwoLoops(unsortedArray);
console.log("Sorted array:", sortedArray);
