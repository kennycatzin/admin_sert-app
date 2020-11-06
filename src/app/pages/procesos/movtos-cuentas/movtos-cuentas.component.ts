import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MovtosCuentasService } from '../../../services/movtos_cuentas/movtos-cuentas.service';

@Component({
  selector: 'app-movtos-cuentas',
  templateUrl: './movtos-cuentas.component.html',
  styleUrls: ['./movtos-cuentas.component.css']
})
export class MovtosCuentasComponent implements OnInit {
  cargando = false;
  desde = 0;
  objeto: any[];
  totalRegistros = 0;
  egreso = '';

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  value = '';
  constructor(public movtosService: MovtosCuentasService) { }

  ngOnInit(): void {
    this.traerDatos();

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  busqueda(termino: string) {
    if (termino === '') {
      // this.traerDatos();
      return;
    }
    // this.ejercicioService.busqueda(termino)
    //       .subscribe((alimento: Ejercicio[]) => {
    //         this.objeto = alimento;
    // });
  }
  guardarCatalogo(f: NgForm) {
    if ( f.invalid ) {
      return;
    }
  }
  nuevo() {
    return true;
  }
  traerDatos() {
    this.cargando = true;
    this.movtosService.getElementoPaginacion(1, 11, 2020, 0)
    .subscribe( (data: any) => {
      console.log(data);
      this.objeto = data;
      console.log(this.objeto);
      this.cargando = false;
    });
  }
}
