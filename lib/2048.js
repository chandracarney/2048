var Board = function() {
  this.firstRow = createRow();
};

var createRow = function() {
  return [null, null, null, null]
};

Board.prototype.addNumberToColumn = function(number, column) {
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
  if (tempArray.length > 1) {
    this.addNumbersInRow(tempArray);
  } else {
    this.firstRow[0] = tempArray[0];
  }
};

// while tempArray has elements, add elements into firstRow
Board.prototype.addNumbersInRow = function(tempArray) {
  for (var i=0; tempArray[0] != null; i++) {
    if (tempArray[0] = tempArray[1]) {
      this.firstRow[i] = tempArray.shift() + tempArray.shift();
    };
  };
};
