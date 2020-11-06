import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class MovtosCuentasService {
  token: string;

  constructor(public http: HttpClient) { }



  getElementoPaginacion( idBancos: number, mes2: number, ejercicio2: number, desde2: number = 0) {

    const url = URL_SERVICIOS + '/api/movbancos/get-movbancos';
    const busqueda = { id_catbancos: idBancos, mes: mes2, ejercicio: ejercicio2, desde: desde2 };
    return this.http.post( url, busqueda )
    .pipe(map( (resp: any) => {
      return resp.data;
    }));
  }


}
