var Board = function() {
  this.firstRow = createRow();
};

var createRow = function () {
  return [null, null, null, null]
};

Board.prototype.addNumberToColumn = function (number, column) {
  if (column === 0) { column = 1 };
  this.firstRow[column-1] = number;
};

Board.prototype.pushLeft = function() {
  var tempArray = [];

  // build temp array of the elements of row
  for (var i=0; i < this.firstRow.length; i++) {
    if (this.firstRow[i] !== null) {
      tempArray.push(this.firstRow[i]);
    };
  };

  // reset row to be null's
  this.firstRow = createRow();

  // put temp array elements back into first row
  for (var i=0; i < tempArray.length; i++) {
    this.firstRow[i] = tempArray[i];
  };
};
