export function steps(n, accumulator = 0) {
  if (n < 1) throw new Error('Only positive numbers are allowed');
  if (n === 1) return accumulator;

  return n % 2 === 0 ? steps(n / 2, accumulator + 1) : steps(n * 3 + 1, accumulator + 1);
}
