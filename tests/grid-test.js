module('It starts the game');

test('It makes an array.', function(assert) {
  assert.deepEqual(newGame(), [
    [ null, null, null, null ],
    [ null, null, null, null ],
    [ null, null, null, null ],
    [ null, null, null, null ] ],
    'It returned an array.');
});
