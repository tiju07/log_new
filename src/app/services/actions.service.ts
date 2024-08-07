import { Injectable } from '@angular/core';
import { Action } from '../interfaces/action';

@Injectable({
    providedIn: 'root'
})
export class ActionsService {

    constructor() { }

    actions: Action[] = [
        {
            actionId: '1',
            name: 'Action 1',
            followUpDays: 1,
            type: 'type 1',
            note: 'Note 1'
        },
        {
            actionId: '2',
            name: 'Action 2',
            followUpDays: 2,
            type: 'type 2',
            note: 'Note 2'
        },
        {
            actionId: '3',
            name: 'Action 3',
            followUpDays: 3,
            type: 'type 3',
            note: 'Note 3'
        },
        {
            actionId: '4',
            name: 'Action 4',
            followUpDays: 4,
            type: 'type 4',
            note: 'Note 4'
        },
        {
            actionId: '5',
            name: 'Action 5',
            followUpDays: 5,
            type: 'type 5',
            note: 'Note 5'
        },
        {
            actionId: '6',
            name: 'Action 6',
            followUpDays: 6,
            type: 'type 6',
            note: 'Note 6'
        },
        {
            actionId: '7',
            name: 'Action 7',
            followUpDays: 7,
            type: 'type 7',
            note: 'Note 7'
        },
        {
            actionId: '8',
            name: 'Action 8',
            followUpDays: 8,
            type: 'type 8',
            note: 'Note 8'
        },
        {
            actionId: '9',
            name: 'Action 9',
            followUpDays: 9,
            type: 'type 9',
            note: 'Note 9'
        },
        {
            actionId: '10',
            name: 'Action 10',
            followUpDays: 10,
            type: 'type 10',
            note: 'Note 10'
        }
    ];

    getAllActions(): Action[] {
        return this.actions;
    }

    getActionByID(id: number): Action {
        return this.actions[0];
    }
}
