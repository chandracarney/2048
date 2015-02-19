module('It moves numbers right.');

test('It can push elements all the way to the right', function(assert) {
  var board = new Board();
  board.addNumberToColumn(2, 3);

  board.pushRight();

  assert.deepEqual(board.firstRow, [null, null, null, 2], 'It moved!');
});

test('Push adds elements of the same number', function(assert) {
  var board = new Board();
  board.addNumberToColumn(2, 3);
  board.addNumberToColumn(2, 1);

  board.pushRight();

  assert.deepEqual(board.firstRow, [null, null, null, 4], 'Moves right');
});

test('Push does not recursively add all numbers', function(assert) {
  var board2 = new Board();
  board2.addNumberToColumn(2, 1);
  board2.addNumberToColumn(2, 2);
  board2.addNumberToColumn(2, 3);
  board2.addNumberToColumn(2, 4);

  board2.pushRight();

  assert.deepEqual(board2.firstRow, [null, null, 4, 4], 'Moved & added sets.');
});

test('Push does not add elements of different numbers', function(assert) {
  var board2 = new Board();
  board2.addNumberToColumn(2, 1);
  board2.addNumberToColumn(4, 3);

  board2.pushRight();

  assert.deepEqual(board2.firstRow, [null, null, 2, 4], 'Moved & did not add');
});

test('Does not add move when numbers are all different.', function(assert) {
  var board2 = new Board();
  board2.addNumberToColumn(16, 1);
  board2.addNumberToColumn(8, 2);
  board2.addNumberToColumn(4, 3);
  board2.addNumberToColumn(2, 4);

  board2.pushRight();

  assert.deepEqual(board2.firstRow, [16, 8, 4, 2], "Didn't move & didn't add");
});
