// week02 문제 2: 팩토리얼 계산
function factorial(n) {
  if (n < 0) return null;
  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
