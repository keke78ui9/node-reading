const {exponent, subtraction, sum} = require('../src/sample');

test('test sum', () => {
    expect(sum(1, 2)).toBe(3);
});

test('test subtraction', () => {
    expect(subtraction(10, 2)).toBe(8);    
});

test('test exponent', () => {
    expect(exponent(5, 2)).toBe(25);
});