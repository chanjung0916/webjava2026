// week01 문제 3: 문자열이 회문인지 검사하기
function isPalindrome(text) {
  const normalized = String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('hello')); // false
