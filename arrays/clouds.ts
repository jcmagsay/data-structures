const data = [0, 1, 0];
const data1 = [0, 0];
const data2 = [
  0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0
];
const data3 = [
  0, 0, 0, 1, 0, 0
];

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  const totalClouds = c.length;

  let totalJumps = 0;
  let nextMove = 0;

  for (let cloudIndex = 0; cloudIndex < totalClouds; cloudIndex++) {
    const cloud = c[cloudIndex];

    const jumpIndex = cloudIndex + 1;
    const leapIndex = cloudIndex + 2;

    const jumpCloud = c[jumpIndex];
    const leapCloud = c[leapIndex];

    const canJump = jumpIndex <= totalClouds - 1 && jumpCloud === 0;
    const canLeap = leapIndex <= totalClouds - 1 && leapCloud === 0;

    // console.log({
    //   cloud,
    //   cloudIndex,
    //   canJump,
    //   canLeap,
    // });

    if (
      canLeap
      && (
        cloud === 0
        && jumpCloud === 0
      ) || (
        cloud === 0
        && jumpCloud === 1
      )
    ) {
      cloudIndex += 1;
      totalJumps += 1;
      // console.log("leap");
    } else if (
      (
        canJump
        && cloud === 0
      ) || (
        canJump
        && cloud === 0
        && leapCloud === 1
      )
    ) {
      totalJumps += 1;
      cloudIndex += 0;
      // console.log("jump");
    }
  }

  return totalJumps;
}

const result = jumpingOnClouds(data);
const result1 = jumpingOnClouds(data1);
const result2 = jumpingOnClouds(data2);
const result3 = jumpingOnClouds(data3);

console.log({
  result,
  result1,
  result2,
  result3,
});
