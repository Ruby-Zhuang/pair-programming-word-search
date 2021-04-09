// Diagonal Check Left
const getDiagonalsLeft = (letters) => {
  const rowLength = letters.length;
  const colLength = letters[0].length;
  const numDiagonals = rowLength + colLength - 1;
  const results = [];
  let xStart = 0;
  let yStart = 0;
  let x = xStart;
  let y = yStart;

  for (let i = 0; i < numDiagonals; i++) {
    // Initialize each diagonal row
    results[i] = [];

    // Keep pushing items as long as we're not out of bounds
    while (x >= 0 && y < colLength) {
      results[i].push(letters[x][y]);
      x--;
      y++;
    }
    
    // Figure out new starting point once we're out of bounds
    xStart = (xStart === rowLength - 1) ? rowLength - 1 : xStart + 1;
    yStart = (i >= rowLength - 1) ? yStart + 1 : 0;
    x = xStart;
    y = yStart;
  }

  return results;
};

// Diagonal Check Left
const getDiagonalsRight = (letters) => {
  const rowLength = letters.length;
  const colLength = letters[0].length;
  const numDiagonals = rowLength + colLength - 1;
  const results = [];
  let xStart = 0;
  let yStart = colLength - 1;
  let x = xStart;
  let y = yStart;

  for (let i = 0; i < numDiagonals; i++) {
    // Initialize each diagonal row
    results[i] = [];

    // Keep pushing items as long as we're not out of bounds
    while (x < rowLength && y < colLength) {
      results[i].push(letters[x][y]);
      x++;
      y++;
    }

    // Figure out new starting point once we're out of bounds
    xStart = (i >= colLength - 1) ? xStart + 1 : 0;
    yStart = (yStart > 0) ? yStart - 1 : 0;
    x = xStart;
    y = yStart;
  }

  return results;
};

// const result = getDiagonalsLeft([
//   ['A', 'W', 'C', 'F'],
//   ['S', 'E', 'I', 'N'],
//   ['Y', 'F', 'C', 'F'],
//   ['H', 'M', 'R', 'U']
// ]);

// const result = getDiagonalsRight([
//   ['A', 'W', 'C', 'F'],
//   ['S', 'E', 'I', 'N'],
//   ['Y', 'F', 'C', 'F'],
//   ['H', 'M', 'R', 'U']
// ]);
// console.log(result);

module.exports = { getDiagonalsLeft, getDiagonalsRight };