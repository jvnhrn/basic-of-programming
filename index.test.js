/* jest test */

/*

const sum = require('./index');

test('adds 1 + 2 to equal 3', () => {
 expect(sum(1, 2)).toBe(3);
});

*/

const isMultiple = require('./index');

test('given number 2 and possible multiple 2, when check if it is multiple, return true', () => {
    expect(isMultiple(2, 2)).toBe(true);
});

test('given number 18 and possible multiple 7, when check if it is multiple, return false', () => {
    expect(isMultiple(7, 18)).toBe(false);
});

test('given number 10 and possible multiple 22, when check if it is multiple, return false', () => {
    expect(isMultiple(10, 22)).toBe(false);
});