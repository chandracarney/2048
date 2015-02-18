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

  assert.deepEqual(board.firstRow, [4, null, null, null], 'It moved!');
})
