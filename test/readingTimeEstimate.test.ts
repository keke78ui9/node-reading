/**
 * @jest-environment jsdom
 */

import {getTime} from '../src/readingTime';
import {describe, expect, test} from '@jest/globals';
import { readingTimeOption } from '../src/interfaces/readingTimeOption';
import {calculateReadingTime as calculate, getTotalWordsBySelector as getTotalWords, getText} from '../src/helpers/readingHelpers';

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
        const option = {
            selector: ''
        } as readingTimeOption;
        const result = getTotalWords(option);
        expect(result).toBe(0);
    })

    test('if selector not exist at DOM should return 0', () => {
        const option = {
            selector: '.target'
        } as readingTimeOption;
        const result = getTotalWords(option);
        expect(result).toBe(0);
    })

    test('if selector exist but not text content at DOM should return 0', () => {
        const div = document.createElement('div');
        div.setAttribute('class', 'target');
        document.body.appendChild(div);
        
        const option = {
            selector: 'target'
        } as readingTimeOption;
        const result = getTotalWords(option);
        expect(result).toBe(0);
    })

    test('if selector exist has content should return correct word count', () => {

        const div = document.createElement('div');
        div.setAttribute('class', 'target');
        div.textContent = "test apple is check"
        document.body.appendChild(div);
        
        const option = {
            selector: '.target'
        } as readingTimeOption;
        const result = getTotalWords(option);
        expect(result).toBe(4);

    })
})

describe('get reading time by target selectors', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('if pass invalid selectors should return 0', () => {
        const result = getTime({
            selector: ''
        } as readingTimeOption);
        expect(result).toBe(0);
    });

    test('if pass one selector not exist should return 0', () => {
        const result = getTime({
            selector: '.test_selector'
        } as readingTimeOption);
        expect(result).toBe(0);
    });

    test('if pass more then one selectors and not exist should return 0', () => {
        const result = getTime({
            selector: '.test_selector, .other-selector'
        } as readingTimeOption);
        expect(result).toBe(0);
    });

    test('if selectors exist but not content should return 0', () => {
        const div = document.createElement('div');
        div.setAttribute('class', 'target');
        document.body.appendChild(div);

        const result = getTime({
            selector: '.target'
        } as readingTimeOption);
        expect(result).toBe(0);

    });

    test('if selectors exist and has contents should return reading time', () => {
        const div = document.createElement('div');
        div.setAttribute('class', 'target');
        div.textContent = "test apple is check"
        document.body.appendChild(div);

        const result = getTime({
            selector: '.target'
        } as readingTimeOption);
        expect(result).toBe(1);
    });
})

describe('get total words from HTML', () => {
    test('valid html should get total words', () => {
        const text = getText("<p>get total words count</p><p>total words</p>");

        expect(text).toBe('get total words count total words');
    });

    test('valid html should get correct time', () => {
        const result =  getTime({
            html: '<p>get total words count</p>'
        });

        expect(result).toBe(1);
    });
})