
/**
 * calculate reading time (default WPF is 200)
 * @param totalWords total words
 * @param wordsPerMinute words per minute (WPM) * 
 */
function calculateReadingTime(totalWords:number, wordsPerMinute:number): number {
    if (!totalWords || !wordsPerMinute) {
        return 0;
    }

    const secondFactor = 0.6;

    const firstReadTime = totalWords / wordsPerMinute;

    const decimalPart = Math.trunc(firstReadTime);
    const numberPart = firstReadTime % 1;

    const secondsMore = decimalPart * secondFactor;
    
    return numberPart + secondsMore;
}

export {calculateReadingTime as calculate};