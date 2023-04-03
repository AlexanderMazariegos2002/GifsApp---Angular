import { query } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: String[] = [];

  get historial() {
    return [...this._historial];
  }

    buscarGifs(query: String = ''){

      query = query.trim().toLocaleLowerCase();

      if( !this._historial.includes(query)){
        this._historial.unshift(query);
        this._historial = this._historial.splice(0,10)
      }


      console.log(this._historial);
  }

}
