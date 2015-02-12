var Board = function() {
  this.firstRow = createRow();
};

var createRow = function () {
  return [null, null, null, null]
};

Board.prototype.addNumberToColumn = function (number, column) {
  this.firstRow[column] = number;
};
