export class MovtosCuentas {
    constructor(
        public id_catbancos: 1,
        public mes: number,
        public ejercicio: number,
        public fechamovto: string,
        public id_catconceptos: number,
        public descripcion: string,
        public cuentacontable: string,
        public iva: number,
        public concepto: string,
        public tipomovto: number,
        public tieneiva: number,
        public tienefactura: number,
        public cancelaiva: number,
        public saldoinicial: number,
        public ingreso: number,
        public egreso: number,
        public id?: number
    ) {
    }
}
