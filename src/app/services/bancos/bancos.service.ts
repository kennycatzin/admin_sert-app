import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  constructor(public http: HttpClient) { }

  getElementoPaginacion( desde2: number = 0) {

    const url = URL_SERVICIOS + '/api/bancos/get-bancos';
    const busqueda = { desde: desde2 };
    return this.http.post( url, busqueda )
    .pipe(map( (resp: any) => {
      return resp.data;
    }));
  }
}
