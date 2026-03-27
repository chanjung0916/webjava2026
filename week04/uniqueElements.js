// week04 문제 1: 배열에서 중복 제거
function uniqueElements(arr) {
  return Array.from(new Set(arr));
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // [1,2,3,4]
console.log(uniqueElements(['a', 'b', 'a', 'c'])); // ['a','b','c']
