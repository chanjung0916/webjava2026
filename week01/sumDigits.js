// week01 문제 2: 숫자의 각 자리 숫자 합 계산
function sumDigits(num) {
  const str = String(Math.abs(num));
  let sum = 0;

  for (const ch of str) {
    if (/[0-9]/.test(ch)) {
      sum += Number(ch);
    }
  }

  return sum;
}

console.log(sumDigits(12345)); // 15
console.log(sumDigits(-907)); // 16
