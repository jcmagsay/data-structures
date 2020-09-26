const DIRECTION = {
  D: 'down',
  L: 'left',
  R: 'right',
  U: 'up',
}

function changeDirection(previousDirection) {
  let nextDirection;

  switch (previousDirection) {
    case DIRECTION.R:
      nextDirection = DIRECTION.D;
      break;
    case DIRECTION.D:
      nextDirection = DIRECTION.L;
      break;
    case DIRECTION.L:
      nextDirection = DIRECTION.U;
      break;
    case DIRECTION.U:
      nextDirection = DIRECTION.R;
      break;
    default:
      throw Error('direction is invalid');
  }

  console.log("prev & new direction", previousDirection, nextDirection);

  return nextDirection;
}

function getNextCoordinate(lastRow, lastColumn, direction) {
  console.log("getting next coords");

  let nextRowCoordinate;
  let nextColCoordinate;

  switch (direction) {
    case DIRECTION.R:
      nextRowCoordinate = lastRow;
      nextColCoordinate = lastColumn + 1;
      break;
    case DIRECTION.D:
      nextRowCoordinate = lastRow + 1;
      nextColCoordinate = lastColumn;
      break;
    case DIRECTION.L:
      nextRowCoordinate = lastRow;
      nextColCoordinate = lastColumn - 1;
      break;
    case DIRECTION.U:
      nextRowCoordinate = lastRow - 1;
      nextColCoordinate = lastColumn;
      break;
    default:
      throw Error('issue with next coordinate');
  }

  console.log({
    nextRowCoordinate,
    nextColCoordinate,
  })

  return {
    row: nextRowCoordinate,
    col: nextColCoordinate,
    dir: direction,
  };
}

function isInBounds(row, column, max) {
  return (
    row < max
    && column < max
    && row >= 0
    && column >= 0
  );
}

function setCoordinate(accumulator, row, column, grid, max, direction) {
  if (!grid[row]) {
    grid[row] = [];
  }

  const value = grid[row][column];
  const isValid = isInBounds(row, column, max) && !value;
  const maxSize = max * max;

  while (isValid && accumulator <= maxSize) {
    grid[row][column] = accumulator;
    accumulator += 1;

    const nextCoords = getNextCoordinate(row, column, direction);

    setCoordinate(accumulator, nextCoords.row, nextCoords.col, grid, max, direction);
  }

  const newDirection = changeDirection(direction);
  const nextCoords = getNextCoordinate(row, column, newDirection);

  console.log(newDirection, accumulator, nextCoords, grid);

  // setCoordinate(accumulator, nextCoords.row, nextCoords.col, grid, max, nextCoords.dir);

  return grid;
}

function createSpiral(size) {
  const initialRowCoordinate = 0;
  const initialColCoordinate = 0;

  const grid = new Array();

  for (let index = 0; index < size; index++) {
    const innerArr = new Array(size);
    grid.push(innerArr);
  }

  return setCoordinate(
    1,
    initialRowCoordinate,
    initialColCoordinate,
    grid,
    size,
    DIRECTION.R
  );
}

const result = createSpiral(3);

console.log(result);
