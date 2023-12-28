function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const currentValue = array[mid];

    if (currentValue === target) {
      return mid;
    } else if (currentValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target not found
}

const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index = binarySearch(array, target);

if (index === -1) {
  console.log(`${target} not found in the array`);
} else {
  console.log(`${target} found at index ${index}`);
}
