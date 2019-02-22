export const transform = (input) => {
  const output = {};

  for (const number in input) {
    input[number].forEach((letter) => {
      output[letter.toLowerCase()] = +number;
    });
  }

  return output;
};
