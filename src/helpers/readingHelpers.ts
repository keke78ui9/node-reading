import { EstimateResult } from "../estimateResult";
import { contentOption } from "../interfaces/contentOption";
import {readingTimeOption} from '../interfaces/readingTimeOption'

/**
 * calculate reading time (default WPF is 200)
 * @param totalWords total words
 * @param wordsPerMinute words per minute (WPM) * 
 */
function calculateReadingTime(totalWords:number, wordsPerMinute?:number): EstimateResult {    
    const estimateRet = {
        data: 0,
        detail: 0
    } as EstimateResult;

    if (!totalWords || totalWords < 1) {
        return estimateRet;
    }

    wordsPerMinute = (!wordsPerMinute || wordsPerMinute < 1) ? 200 : wordsPerMinute;
    const secondFactor = 0.6;

    const firstReadTime = totalWords / wordsPerMinute;

    const numberPart = Math.trunc(firstReadTime);
    const decimalPart = firstReadTime % 1;

    const secondsMore = decimalPart * secondFactor;
    
    estimateRet.data = Math.ceil(numberPart + secondsMore);
    estimateRet.detail = numberPart + secondsMore;
    return estimateRet;
}

/**
 * get text from HTML
 * @param html HTML
 * @returns content or empty string
 */
function getText(htmlString:string):string {
    if (!htmlString) {
        return '';
    }

    let rep1 = htmlString.replace(/<[^>]+>/g, ' ');
    let rep2 = rep1.replace(/ +/g, ' ');
    return rep2.trim();
}

/**
 * get text by option
 * @param option 
 * @returns 
 */
function getContent(option:contentOption): string {
    if (option.html) {
        return getText(option.html);
    }
    else if (option.content) {
        return option.content;
    }
    else if (option.selector) {
        const elements = document.querySelectorAll(option.selector);
        let content = '';
        if (elements && elements.length > 0) {            
            elements.forEach((ele) => {
                content += ele.textContent;
            });
        }
        return content;
    }
    else {
        return '';
    }
}

/**
 * get total words count by selectors
 * @param selector 
 * @returns 
 */
function getTotalWordsBySelector(option:readingTimeOption): number {

    const content = getContent(option);
    if (!content) {
        return 0;
    }

    return content.split(' ').length;
}


export {calculateReadingTime, getText, getTotalWordsBySelector, getContent};