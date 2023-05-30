// 3. Find the maximum of three numbers.

function findMax(num1, num2, num3) {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}

console.log(findMax(5, 10, 3));
console.log(findMax(1, 2, 3));
