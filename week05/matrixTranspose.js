// week05 문제 1: 행렬 전치
function matrixTranspose(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: cols }, () => []);

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

console.log(matrixTranspose([[1, 2, 3], [4, 5, 6]])); // [[1,4],[2,5],[3,6]]
