/**
 * option to calculate the reading time
 */
export interface RequestTimeOption {
    /**
     * selector, if provided will search the content from provided selector
     */
    selector?: string;

    /**
     * instead of use selector query DOM to find content, pass content directly.
     */
    content?:string;
    
    /**
     * optional, words per minutes.
     * default is 200, 200 words per minute.
     */
    wordsPerMinute?:number;
}