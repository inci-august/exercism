export const compute = (strand1, strand2) => {
  if (strand1.length !== strand2.length) {
    throw new Error('left and right strands must be of equal length');
  }

  let count = 0;

  strand1.split('').forEach((n, i) => {
    if (n !== strand2[i]) count += 1;
  });

  return count;
};
