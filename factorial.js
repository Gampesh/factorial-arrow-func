let factorial = (num) => num === 0 ? 1 : num * factorial(num - 1);

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));