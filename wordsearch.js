const wordSearch = (letters, word) => {
  // Empty array case
  if (letters.length === 0) return false;

  // Reverse word to check for backwards case
  let wordReversed = word.split('').reverse().join('');

  // Transpose letters for vertical case
  const vertical = transpose(letters);

  // Check horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const line of horizontalJoin) {
    if (line.includes(word) || line.includes(wordReversed)) return true;
  }

  // Check vertically
  const verticalJoin = vertical.map(ls => ls.join(''));
  for (const line of verticalJoin) {
    if (line.includes(word) || line.includes(wordReversed)) return true;
  }

  return false;
};

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

module.exports = wordSearch;