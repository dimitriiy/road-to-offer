const isPerfectSquare = (value: number) => {
  const root = Math.sqrt(value);

  return root === Math.floor(root);
};
// x = a**b;

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(0)); // true
console.log(isPerfectSquare(25)); // true
