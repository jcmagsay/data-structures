function moveUp(grid, max, accumulator, startRow, startCol) {
  let col = startCol;
  let row = startRow - 1;

  let lastRow;
  let lastCol;

  for (let index = 0; index < max; index++) {
    accumulator += 1;
    row = startRow - (index + 1);
    console.log("move up: ", max, index, accumulator, [row, col]);
    grid[row][col] = accumulator;

    lastRow = row;
    lastCol = col;
  }

  const rightMax = max;

  if (rightMax > 0) {
    return moveRight(grid, rightMax, accumulator, lastRow, lastCol);
  } else {
    return grid;
  }
}

function moveLeft(grid, max, accumulator, startRow, startCol) {
  let col = startCol - 1;
  let row = startRow;

  let lastRow;
  let lastCol;

  for (let index = 0; index < max; index++) {
    accumulator += 1;
    col = startCol - (index + 1);
    console.log("move left: ", max, index, accumulator, [row, col]);
    grid[row][col] = accumulator;

    lastRow = row;
    lastCol = col;
  }

  const upMax = max - 1;

  return moveUp(grid, upMax, accumulator, lastRow, lastCol);
}

function moveDown(grid, max, accumulator, startRow, startCol) {
  let col = startCol;
  let row = startRow;

  let lastRow;
  let lastCol;

  for (let index = 0; index < max; index++) {
    accumulator += 1;
    row = startRow + (index + 1);
    console.log("move down: ", max, index, accumulator, [row, col]);
    grid[row][col] = accumulator;

    lastRow = row;
    lastCol = col;
  }

  const leftMax = max;

  return moveLeft(grid, leftMax, accumulator, lastRow, lastCol);
}

function moveRight(grid, max, accumulator, startRow, startCol) {
  let row = startRow;
  let col = startCol + 1;

  let lastRow;
  let lastCol;

  if (accumulator > 0) {
    for (let index = 0; index < max; index++) {
      accumulator += 1;
      col = startCol + (index + 1);
      console.log("move right: ", max, index, accumulator, [row, col]);
      grid[row][col] = accumulator;

      lastRow = row;
      lastCol = col;
    }
  } else {
    for (let index = 0; index < max; index++) {
      accumulator += 1;
      col = startCol + index;
      console.log("move right: ", max, index, accumulator, [row, col]);
      grid[row][col] = accumulator;

      lastRow = row;
      lastCol = col;
    }
  }

  const downMax = max - 1;

  return moveDown(grid, downMax, accumulator, lastRow, lastCol);
}

function initMovement(grid, max) {
  let accumulator = 0;

  let newGrid;

  while (!newGrid) {
    newGrid = moveRight(grid, max, accumulator, 0, 0);
  }

  return newGrid;
}

function createSpiralArray(num) {
  const grid = new Array();

  let iterator = 0;

  for (let gridRowIndex = 0; gridRowIndex < num; gridRowIndex++) {
    const row = new Array();

    grid.push(row);
  }

  return initMovement(grid, num);
}

var array1 = createSpiralArray(8);

console.log(array1);