// week02 문제 1: n번째 피보나치 수 계산
function fibonacci(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i += 1) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
