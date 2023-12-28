function quickSort(array, low, high) {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
}

function partition(array, low, high) {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

const array = [5, 10, 20, 4, 1];
quickSort(array, 0, array.length - 1);
console.log(array); // Output: [1, 2, 3, 4, 5]
