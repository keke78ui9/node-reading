/**
 * option to calculate the reading time
 */
export interface RequestTimeOption {
    /**
     * single selector to lookup for the content from web page.
     */
    selector: string;
    
    /**
     * optional, words per minutes.
     */
    wordsPerMinute?:number;
}