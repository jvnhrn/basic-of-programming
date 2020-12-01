const fizzBuzz = require('./fizzbuzz');
const { expect } = require('@jest/globals');


test('If number is modular of 3 and 5 is FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test('If number is modular of 3 and 5 is FizzBuzz', () => {
    expect(fizzBuzz(45)).toBe("FizzBuzz");
});

test('if number is modular of 3 return Fizz', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
});