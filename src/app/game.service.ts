import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class GameService {
  arrPoema = [];
  constructor() { }

  getGame(): Observable<any> {
    return Observable.of(this.arrPoema);
  }

  setGame(text: string): Observable<any> {
    this.arrPoema.push({
      persona: 'escritor', texto: text
    });
    return Observable.of({message: 'success'});
  }
}
