import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  changeStatus(value: boolean){
    this.change.emit(value);
  }

  

}
