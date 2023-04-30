import { RequestTimeOption } from "./requestTimeOption";
import {calculateReadingTime, getTotalWordsBySelector} from './helpers/readingHelpers'


/**
 * get reading time base on the settings.
 * @param option 
 * @returns number as minutes
 */
function getTime(option:RequestTimeOption): number | undefined {
    if (!option) {
        return 0;
    }
    let totalWords = getTotalWordsBySelector(option);
    if (!totalWords) {
        return 0;
    }
    
    const time = calculateReadingTime(totalWords, option.wordsPerMinute);
    if (!time) {
        0;
    }    
    return time.data;
}

export { getTime };