export class Linea_Producto{

    private Cantidad: number = 0;
    private Precio: number = 0;

    constructor(Cantidad: number, Precio: number){
        this.Cantidad = Cantidad;
        this.Precio = Precio;
    }


    public get_Cantidad():number{
        return this.Cantidad;
    }
    public get_Precio():number{
        return this.Precio;
    }


    public set_Canntidad(Cantidad:number){
        this.Cantidad = Cantidad;
    }
    public set_Precio(Precio:number){
        this.Precio = Precio;
    }
}