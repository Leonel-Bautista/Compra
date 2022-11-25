export class Producto{

    private ID: number = 0;
    private Denominacion: string = "";
    private Proveedor: string = "";

    constructor(ID: number, Denominacion: string, Proveedor: string){
        this.ID = ID;
        this.Denominacion = Denominacion;
        this.Proveedor = Proveedor;
    }

    public get_ID():number {
        return this.ID;
    }
    public get_Denominacion():string {
        return this.Denominacion;
    }
    public get_Proveedor():string {
        return this.Proveedor;
    }


    public set_ID(ID:number) {
        this.ID = ID;
    }
    public set_Denominacion(Denominacion:string) {
        this.Denominacion = Denominacion;
    }
    public set_Proveedor(Proveedor:string) {
        this.Proveedor = Proveedor;
    }
}