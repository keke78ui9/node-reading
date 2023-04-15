
/**
 * calculate reading time (default WPF is 200)
 * @param totalWords total words
 * @param wordsPerMinute words per minute (WPM) * 
 */
function calculateReadingTime(totalWords:number, wordsPerMinute:number): number {
    if (!totalWords || totalWords < 1) {
        return 0;
    }

    wordsPerMinute = wordsPerMinute < 1 ? 200 : wordsPerMinute;

    const secondFactor = 0.6;

    const firstReadTime = totalWords / wordsPerMinute;

    const numberPart = Math.trunc(firstReadTime);
    const decimalPart = firstReadTime % 1;

    const secondsMore = decimalPart * secondFactor;
    
    return numberPart + secondsMore;
}

export {calculateReadingTime as calculate};