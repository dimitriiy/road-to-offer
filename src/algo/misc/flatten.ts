const flatten = (arr: unknown[]) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const result: unknown[] = [];

  const process = (items: unknown[]) => {
    for (const item of items) {
      if (Array.isArray(item)) {
        process(item);
      } else {
        result.push(item);
      }
    }
  };

  process(arr);

  return result;
};

console.log(flatten([1, 2, 3])); // [1, 2, 3]
console.log(flatten([1, [2, 3], 4])); // [1, 2, 3, 4]
console.log(flatten([[1, 2], [3, 4]])); // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([])); // []
