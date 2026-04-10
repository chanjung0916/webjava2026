// week06 문제 1: 메모이제이션을 사용한 피보나치
function fibonacciMemo(n, memo = {}) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(10)); // 55
console.log(fibonacciMemo(20)); // 6765
