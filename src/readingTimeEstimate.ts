import { EstimateResult } from "./estimateResult";
import { RequestTimeOption } from "./requestTimeOption";

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
 * get total words count by selectors
 * @param selector 
 * @returns 
 */
function getTotalWordsBySelector(selector:string): number {
    if (!selector) {
        return 0;
    }

    const elements = document.querySelectorAll(selector);
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

/**
 * get reading time base on the settings.
 * @param option 
 * @returns number as minutes
 */
function getTime(option:RequestTimeOption): number | undefined {
    if (!option) {
        return 0;
    }
    let totalWords = 0;
    if (option.selector) {
        totalWords = getTotalWordsBySelector(option.selector);
    }
    else if (option.content) {
        totalWords = option.content.split(" ").length;
    }
    
    const time = calculateReadingTime(totalWords, option.wordsPerMinute);
    if (!time) {
        0;
    }    
    return time.data;
}

export {calculateReadingTime as calculate, getTotalWordsBySelector as getTotalWords, getTime};