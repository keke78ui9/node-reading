export interface speakOption {
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
}