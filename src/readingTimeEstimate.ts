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

function getTotalWords(targetSelector:string): number {
    if (!targetSelector) {
        return 0;
    }

    const targetElement = document.querySelector(targetSelector);
    if (!targetElement || !targetElement.textContent) {
        return 0;
    }

    return targetElement.textContent.split(" ").length;
}

function getTime(option:RequestTimeOption): number {
    if (!option) {
        return 0;
    }

    let time = 0;
    option.selectors.forEach(selector => {
        const totalWords = getTotalWords(selector);
        const eleTime = calculateReadingTime(totalWords, option.wordsPerMinute);
        time += eleTime.data;
    });

    return time;
}

export {calculateReadingTime as calculate, getTotalWords, getTime};