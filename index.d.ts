export interface RequestTimeOption {
    selector?: string;
    content?:string;
}

export interface EstimateResult {
    data: number;
    detail: number;
}

export function getTime(option: RequestTimeOption): number | undefined;