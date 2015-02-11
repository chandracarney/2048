function newGame() {
  var board = new Array();

  for (i=0; i<4; i++) {
    board[i] = new Array();

    for (j=0;j<4;j++) {
      board[i][j] = null;
    };
  };

  return board;
};
