var RLE = function() {};

RLE.prototype.encode = function(input) {
  let count = 1;
  let output = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count += 1;
    } else {
      count > 1 ? (output += count + input[i]) : (output += input[i]);
      count = 1;
    }
  }

  return output;
};

RLE.prototype.decode = function(input) {
  let numStr = '';
  let output = '';

  for (let i = 0; i < input.length; i++) {
    if (+input[i]) {
      numStr += input[i];
    } else {
      numStr ? (output += input[i].repeat(+numStr)) : (output += input[i]);
      numStr = '';
    }
  }

  return output;
};

module.exports = new RLE();
