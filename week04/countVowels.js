// week04 문제 2: 문자열에서 모음 개수 세기
function countVowels(text) {
  const vowels = text.toLowerCase().match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}

console.log(countVowels('Hello World')); // 3
console.log(countVowels('JavaScript')); // 3
