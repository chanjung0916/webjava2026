// week03 문제 2: 정렬된 두 배열 합치기
function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }
  }

  return result.concat(arr1.slice(i), arr2.slice(j));
}

console.log(mergeSortedArrays([1, 4, 7], [2, 3, 6])); // [1,2,3,4,6,7]
console.log(mergeSortedArrays([0, 5], [1, 2, 3])); // [0,1,2,3,5]
