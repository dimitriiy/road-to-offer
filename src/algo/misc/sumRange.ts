const sumRange = (start: number, end: number) => {
  const count = end - start + 1;

  return ((start + end) * count) / 2;
};
console.log(sumRange(1, 5)); // 15
console.log(sumRange(0, 10)); // 55
console.log(sumRange(-3, 3)); // 0
