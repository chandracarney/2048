var createRow = function() {
  return [null, null, null, null]
};

var Board = function() {
  this.firstRow = createRow();
};

Board.prototype.addNumberToColumn = function(number, column) {
  if (column === 0) { column = 1 };
  this.firstRow[column-1] = number;
};

Board.prototype.pushLeft = function() {
  var tempArray = [];

  // build temp array of the elements of row
  for (var i=0; i < this.firstRow.length; i++) {
    if (this.firstRow[i]) {
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
  };
};

Board.prototype.pushRight = function() {
  var tempArray = [];
  this.firstRow.reverse();

  // build temp array of the elements of row
  for (var i=0; i < this.firstRow.length; i++) {
    if (this.firstRow[i]) {
      tempArray.push(this.firstRow[i]);
    };
  };

  // reset row to be null's
  this.firstRow = createRow();

  // add elements and push them back into row
  if (tempArray.length > 1) {
    this.addNumbersInRow(tempArray);
    this.firstRow.reverse();
  } else {
    this.firstRow[3] = tempArray[0];
  };
};

// while tempArray has elements, add elements into row
Board.prototype.addNumbersInRow = function(tempArray) {
  for (var i=0; tempArray[0]; i++) {
    if (tempArray[0] === tempArray[1]) {
      this.firstRow[i] = tempArray.shift() + tempArray.shift();
    } else {
      this.firstRow[i] = tempArray.shift();
    };
  };
};
