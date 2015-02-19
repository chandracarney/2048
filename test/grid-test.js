module('It starts the game');

test('It makes an array.', function(assert) {
  var board = new Board();

  assert.deepEqual(board.firstRow, [ null, null, null, null ], 'Array return.');
});

test('It can put one element.', function(assert) {
  var board = new Board();

  board.addNumberToColumn(2, 4)

  assert.deepEqual(board.firstRow, [null, null, null, 2], 'It has one element.')
});

test('It can put two elements.', function(assert) {
  var board = new Board();

  board.addNumberToColumn(2, 4)
  board.addNumberToColumn(4, 3)

  assert.deepEqual(board.firstRow, [null, null, 4, 2], 'It has two elements.')
});
