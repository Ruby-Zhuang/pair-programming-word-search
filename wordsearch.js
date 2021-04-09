// Require modules
const { getDiagonalsLeft, getDiagonalsRight } = require('./diagonalChecks.js');
const { transpose } = require('./transpose.js');

// Search for string forwards and backwards by joining each row of 2D character array into strings
const searchLines = (matrix, string) => {
  // Reverse string to check for backwards case
  const stringReversed = string.split('').reverse().join('');

  const joinedRows = matrix.map(ls => ls.join(''));
  for (const line of joinedRows) {
    if (line.includes(string) || line.includes(stringReversed)) return true;
  }
  return false;
};

// Function to set up checks
const wordSearch = (letters, word) => {
  // Empty array case
  if (letters.length === 0) return false;
  
  // Check horizontally
  const horizontalCheck = searchLines(letters, word);
  
  // Check vertically
  const lettersTransposed = transpose(letters);   // Transpose letters for vertical case
  const verticalCheck = searchLines(lettersTransposed, word);
  
  // Check diagonally left direction
  const diagonalLinesLeft = getDiagonalsLeft(letters, word);
  const diagonalLeftCheck = searchLines(diagonalLinesLeft, word);
  
  // Check diagonally right direction
  const diagonalLinesRight = getDiagonalsRight(letters, word);
  const diagonalRightCheck = searchLines(diagonalLinesRight, word);

  // Return true if any of the checks are true, otherwise return false
  return ((horizontalCheck) || (verticalCheck) || (diagonalLeftCheck) || (diagonalRightCheck));
};


module.exports = wordSearch;

