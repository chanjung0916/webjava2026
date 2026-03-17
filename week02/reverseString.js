// week02 문제 3: 문자열 뒤집기
function reverseString(str) {
  return String(str).split('').reverse().join('');
}

console.log(reverseString('hello')); // olleh
console.log(reverseString('JavaScript')); // tpircSavaJ
