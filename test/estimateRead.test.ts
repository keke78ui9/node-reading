import {calculate} from '../src/estimateRead';
import {describe, expect, test} from '@jest/globals';

describe('calculate reading time', () => {
    test('If total words count is invalid - estimate reading time return 0', () => {
       
        const result = calculate(0, 200);
        const result1 = calculate(-1, 400);        

        expect(result).toBe(0);
        expect(result1).toBe(0);

    });

    test('If valid words count and valid words in minutes should return correct result', () => {
       
        const result = calculate(900, 200);

        expect(result).toBe(5);

    });

    test('If words per minutes is invalid should use default WPM for calculation', () => {       

        const result = calculate(900, 0);

        expect(result).toBe(5);
    });
})