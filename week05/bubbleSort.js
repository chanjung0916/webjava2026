// week05 문제 2: 버블 정렬 구현
function bubbleSort(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - 1 - i; j += 1) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

console.log(bubbleSort([5, 3, 8, 1])); // [1,3,5,8]
