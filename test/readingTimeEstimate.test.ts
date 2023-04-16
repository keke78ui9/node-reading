/**
 * @jest-environment jsdom
 */

import {calculate, getTotalWords} from '../src/readingTimeEstimate';
import {describe, expect, test} from '@jest/globals';

describe('calculate reading time', () => {
    test('If total words count is invalid - estimate reading time return 0', () => {
       
        const result = calculate(0, 200);
        const result1 = calculate(-1, 400);        

        expect(result.data).toBe(0);
        expect(result1.data).toBe(0);

    });

    test('If valid words count and valid words in minutes should return correct result', () => {
       
        const result = calculate(900, 200);

        expect(result.data).toBe(5);
        expect(result.detail).toBe(4.3);

    });

    test('If words per minutes is invalid should use default WPM for calculation', () => {       

        const result = calculate(900, 0);

        expect(result.data).toBe(5);
    });

    test('If words per minutes is valid should get correct result - case 1', () => {       

        const result = calculate(1501, 100);

        expect(result.data).toBe(16);
    });
})

describe('get total words from DOM', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('if selector is invalid input should return 0', () => {
        const result = getTotalWords('');
        expect(result).toBe(0);
    })

    test('if selector not exist at DOM should return 0', () => {
        
        const result = getTotalWords('.target');
        expect(result).toBe(0);
    })

    test('if selector exist but not text content at DOM should return 0', () => {
        const div = document.createElement('div');
        div.setAttribute('class', 'target');
        document.body.appendChild(div);
        
        const result = getTotalWords('target');
        expect(result).toBe(0);
    })

    test('if selector exist has content should return correct word count', () => {

        const div = document.createElement('div');
        div.setAttribute('class', 'target');
        div.textContent = "test apple is check"
        document.body.appendChild(div);
        
        const result = getTotalWords('.target');
        expect(result).toBe(4);

    })
})