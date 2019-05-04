import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http:Http) { }

  getMakes() {
    return this.http.get('/api/makes');
  }
}
