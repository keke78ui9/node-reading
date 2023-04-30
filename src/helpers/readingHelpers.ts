import { EstimateResult } from "../estimateResult";
import {RequestTimeOption} from '../requestTimeOption'

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
function getText(htmlString:string):string|null {
    if (!htmlString) {
        return '';
    }

    let rep1 = htmlString.replace(/<[^>]+>/g, ' ');
    let rep2 = rep1.replace(/ +/g, ' ');
    return rep2.trim();
}


/**
 * get total words count by selectors
 * @param selector 
 * @returns 
 */
function getTotalWordsBySelector(option:RequestTimeOption): number {

    if (option.html) {
        const content = getText(option.html);
        if (!content) {
            return 0;
        }
        return content.split(" ").length;
    }
    
    if (option.content) {
        return option.content.split(" ").length;
    }

    if (!option.selector) {
        return 0;
    }

    const elements = document.querySelectorAll(option.selector);
    if (!elements || elements.length < 1) {
        return 0;
    }

    let content = '';
    elements.forEach((ele) => {
        content += ele.textContent;
    });

    if (!content) {
        return 0;
    }

    return content.split(" ").length;
}


export {calculateReadingTime, getText, getTotalWordsBySelector};