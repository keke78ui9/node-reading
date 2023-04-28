export interface RequestTimeOption {
    selector?: string;
    content?:string;
}

export interface EstimateResult {
    data: number;
    detail: number;
}

export function getTime(option: RequestTimeOption): number | undefined;

export function calculateReadingTime(totalWords:number, wordsPerMinute?:number): EstimateResult;

export function getTotalWordsBySelector(option:RequestTimeOption): number;
