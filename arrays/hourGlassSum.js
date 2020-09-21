const data = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  // console.info({ arr });
  const sums = new Array();

  for (let rowStart = 0; rowStart < 4; rowStart++) {
    for (let colStart = 0; colStart < 4; colStart++) {
      const row0 = rowStart;
      const row1 = rowStart + 1;
      const row2 = rowStart + 2;
      const col0 = colStart;
      const col1 = colStart + 1;
      const col2 = colStart + 2;

      const x0y0 = arr[row0][col0];
      const x0y1 = arr[row0][col1];
      const x0y2 = arr[row0][col2];
      const x1y2 = arr[row1][col1];
      const x2y0 = arr[row2][col0];
      const x2y1 = arr[row2][col1];
      const x2y2 = arr[row2][col2];

      const hourGlassTotal = x0y0 + x0y1 + x0y2 + x1y2 + x2y0 + x2y1 + x2y2;

      console.log(hourGlassTotal);

      sums.push(hourGlassTotal)
    }
  }

  return Math.max(...sums);
}

const response = hourglassSum(data);

console.info({
  response,
});