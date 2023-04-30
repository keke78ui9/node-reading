/**
 * option to calculate the reading time
 */
export interface readingTimeOption {
    /**
     * selector, if provided search DOM content by selector.
     */
    selector?: string;

    /**
     * the HTML, if provided will parse to find content.
     */
    html?:string;

    /**
     * the content or article, use to process word count.
     */
    content?:string;
    
    /**
     * optional, words per minutes.
     * default is 200, 200 words per minute.
     */
    wordsPerMinute?:number;
}