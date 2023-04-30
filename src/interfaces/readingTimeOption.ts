import { contentOption } from "./contentOption";

/**
 * option to calculate the reading time
 */
export interface readingTimeOption extends contentOption {
    /**
     * optional, words per minutes.
     * default is 200, 200 words per minute.
     */
    wordsPerMinute?:number;
}