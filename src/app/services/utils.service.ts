import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }

    sidebarVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
