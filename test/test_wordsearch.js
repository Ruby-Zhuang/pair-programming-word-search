const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it('should return falise if word matrix is an empty array', function() {
    const result = wordSearch([],'DYLAN');
    assert.isFalse(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present partially in a row", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'R', 'U', 'B', 'Y', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'RUBY');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'D', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'Y', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'L', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'A', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'N', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DYLAN');

    assert.isTrue(result);
  });

  it('should return true if word is backwards', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'L', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'Y', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'D', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DYLAN');
    assert.isTrue(result);
  });

  // Diagonals Bottom-Left to Top-Right
  it('should return true if word is diagonal from bottom-left to top-right', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'L', 'E', 'R', 'R', 'G'],
      ['W', 'H', 'C', 'Y', 'U', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'B', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'Y', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'RUBY');
    assert.isTrue(result);
  });

  it('should return true if word is diagonal from bottom-left to top-right in a non-square array (cols > rows)', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'D', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'E', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'R', 'A', 'Q', 'U', 'A', 'L'],
    ], 'RED');
    assert.isTrue(result);
  });

  it('should return true if word is diagonal from bottom-left to top-right in a non-square array (rows > cols)', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q'],
      ['S', 'E', 'I', 'N', 'W'],
      ['Y', 'F', 'C', 'O', 'Q'],
      ['H', 'M', 'E', 'L', 'E'],
      ['W', 'M', 'C', 'Y', 'U'],
      ['B', 'F', 'R', 'B', 'N'],
      ['U', 'B', 'Y', 'W', 'A'],
      ['O', 'D', 'C', 'A', 'K'],
      ['E', 'Z', 'K', 'F', 'Q']
    ], 'MEOW');
    assert.isTrue(result);
  });

  // Diagonals Top-Left to Bottom-Right
  it('should return true if word is diagonal from top-left to bottom-right', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'Y', 'U', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'B', 'E', 'R', 'R', 'G'],
      ['W', 'H', 'C', 'Y', 'U', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'B', 'N', 'R', 'Y', 'B'],
      ['U', 'B', 'Y', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'RUBY');
    assert.isTrue(result);
  });

  it('should return true if word is diagonal from top-left to bottom-right in a non-square array (cols > rows)', function() {
    const result = wordSearch([
      ['A', 'W', 'D', 'F', 'D', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'E', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'R', 'A', 'Q', 'U', 'A', 'L'],
    ], 'QED');
    assert.isTrue(result);
  });

  it('should return true if word is diagonal from top-left to bottom-right in a non-square array (rows > cols)', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q'],
      ['S', 'E', 'I', 'N', 'W'],
      ['Y', 'F', 'C', 'O', 'Q'],
      ['L', 'M', 'E', 'L', 'E'],
      ['W', 'O', 'C', 'Y', 'U'],
      ['B', 'F', 'O', 'B', 'N'],
      ['U', 'B', 'Y', 'C', 'A'],
      ['O', 'D', 'C', 'A', 'K'],
      ['E', 'Z', 'K', 'F', 'Q']
    ], 'COOL');
    assert.isTrue(result);
  });
});
