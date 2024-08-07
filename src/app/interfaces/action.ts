export interface Action {
    actionId: string;
    name: string;
    followUpDays: number;
    type: string;
    note: string;
}