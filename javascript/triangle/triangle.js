class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    const { a, b, c } = this;

    if (a * b * c === 0) {
      throw new Error('All sides have to be of length greater than 0');
    }
    if (a + b === c || b + c === a || a + c === b) {
      throw new Error('Degenerate triangle');
    }
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error('Triangle violates triangle inequality');
    }
    if ((a + b + c) / 3 === a) {
      return 'equilateral';
    }
    if (a === b || b === c || a === c) {
      return 'isosceles';
    }
    return 'scalene';
  }
}

export default Triangle;
