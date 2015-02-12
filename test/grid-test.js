module('It starts the game');

test('It makes an array.', function(assert) {
  var board = new Board();

  assert.deepEqual(board.firstRow, [ null, null, null, null ], 'It returned an array.');
});

test('It puts one random element.', function(assert) {
  var board = new Board();
  board.addNumberToColumn(2, 3)
  assert.deepEqual(board.firstRow, [null, null, null, 2], 'It has one elements.')
});

test('It puts two random elements.', function(assert) {
  var board = new Board();
  board.addNumberToColumn(2, 3)
  board.addNumberToColumn(4, 2)
  assert.deepEqual(board.firstRow, [null, null, 4, 2], 'It has one elements.')
});
