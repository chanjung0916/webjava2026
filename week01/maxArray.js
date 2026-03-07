// week01 문제 1: 배열에서 최댓값 찾기
function maxArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(maxArray([3, 7, 2, 9, 4])); // 9
console.log(maxArray([-5, -1, -12])); // -1
