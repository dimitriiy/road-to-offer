const reverseNumber = (value: number): number => {
  const reversedAbs = Number.parseInt(
    Math.abs(value).toString().split('').reverse().join('')
  );

  return value < 0 ? -reversedAbs : reversedAbs;
};
// Тестовые данные
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-456)); // -654
console.log(reverseNumber(1000)); // 1
console.log(reverseNumber(0)); // 0
