const { test } = require('@jest/globals');
const calculate = require('./calculator');
/*
test('the calculator shpuld evaluate the string "1" to the number 1', () => {
    expect(calculate("1")).toBe(1);
});

test('the calculator shpuld evaluate the string "2" to the number 2', () => {
    expect(calculate("2")).toBe(2);
});

test('the calculator shpuld evaluate a string vontaining any random number to its integer valur', () => {
    const n = Math.floor(Math.random() * 100);
    expect(calculate(n.toString())).toBe(n);
});
*/
test('The calculator should sum numbers that are separated by a comma', () => {
    expect(calculate("1,2")).toBe(3);
});