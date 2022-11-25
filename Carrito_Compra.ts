export class Carrito_Compra{

    private Fecha_Creacion: number = 0;

    constructor(Fecha_Creacion: number){

        this.Fecha_Creacion = Fecha_Creacion;
    }

    public get_Fecha_Creacion():number {
        return this.Fecha_Creacion;
    }

    public set_Fecha_Creacion(Fecha_Creacion:number) {
        this.Fecha_Creacion = Fecha_Creacion;
    }

}