import { Component, OnInit } from '@angular/core';
import { BancosService } from '../../services/bancos/bancos.service';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {
  cargando = true;
  objeto: any[];
  desde = 0;
  constructor(public bancoServices: BancosService) {
    this.traerDatos();
   }

  ngOnInit(): void {
  }

  traerDatos() {
    this.cargando = true;
    this.bancoServices.getElementoPaginacion(this.desde)
    .subscribe( (data: any) => {
      console.log(data);
      this.objeto = data;
      this.cargando = false;
    });
  }

}
