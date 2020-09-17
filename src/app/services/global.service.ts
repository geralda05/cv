import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public language = 'spanish';
  constructor() { }

  setLanguage(v){
    this.language = v;
  }

  getLanguage(v){
    return this.language
  }
}
