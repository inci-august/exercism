const RLE = {
  encode: input =>
    input.replace(/(\w)\1+/g, (match, char) => `${match.length}${char}`),
  decode: input =>
    input.replace(/(\d+)(\w)/g, (match, digit, char) => char.repeat(digit))
};

module.exports = RLE;
