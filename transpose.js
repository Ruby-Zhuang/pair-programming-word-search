// Transpose function
const transpose = (matrix) => {
  const result = []; // Initialize empty array

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (x === 0) result[y] = []; // Initialize each row of transposed matrix (# of rows in transposed should be # of columns in original matrix)
      result[y][x] = matrix[x][y];
    }
  }
  return result;
};

module.exports = { transpose };