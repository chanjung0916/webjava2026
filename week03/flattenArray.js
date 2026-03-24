// week03 문제 3: 중첩 배열 평탄화
function flattenArray(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5])); // [1,2,3,4,5]
console.log(flattenArray([[1], 2, [3, [4, 5]]])); // [1,2,3,4,5]
