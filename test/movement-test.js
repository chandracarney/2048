module('It moves numbers');

test('It can push elements all the way to the left', function(assert) {
  var board = new Board();
  board.addNumberToColumn(2, 3)

  board.pushLeft();

  assert.deepEqual(board.firstRow, [2, null, null, null], 'It moved!');
});

test('Push adds elements of the same number', function(assert) {
  var board = new Board();
  board.addNumberToColumn(2, 3)
  board.addNumberToColumn(2, 1)

  board.pushLeft();

  assert.deepEqual(board.firstRow, [4, null, null, null], 'It moved and added numbers!');
});

test('Push does not add elements of different numbers', function(assert) {
  var board2 = new Board();
  board2.addNumberToColumn(2, 1);
  board2.addNumberToColumn(4, 3);

  board2.pushLeft();

  assert.deepEqual(board2.firstRow, [2, 4, null, null], 'It moved and did not add!');
})
