const secondLargest = (arr: number[]) => {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (const n of arr) {
    if (n > max) {
      secondMax = max;
      max = n;
    } else if (n > secondMax && n < max) {
      secondMax = n;
    }
  }

  return secondMax;
};

console.log(secondLargest([10, 20, 4, 45, 99])); // 45
console.log(secondLargest([5, 5, 5])); // null
console.log(secondLargest([1])); // null
