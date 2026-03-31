// week04 문제 3: 두 문자열이 애너그램인지 확인
function isAnagram(str1, str2) {
  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .split('')
      .sort()
      .join('');

  return normalize(str1) === normalize(str2);
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
