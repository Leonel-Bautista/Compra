export class Envio{

    private ID: number = 0;
    private Direccion_Factura: number = 0;
    private Finalizado: string = "";
    private Fecha_envio: number = 0;
    private Compañia: string = "";

    constructor(ID: number, Direccion_Factura: number, Finalizado: string, Fecha_envio: number, Compañia: string){
        this.ID = ID;
        this.Direccion_Factura = Direccion_Factura;
        this.Finalizado = Finalizado;
        this.Fecha_envio = Fecha_envio;
        this.Compañia = Compañia;
    }


public get_ID():number{
        return this.ID;
    }
public get_Direccion_Factura():number{
        return this.Direccion_Factura;
    }
public get_Finalizado():string{
    return this.Finalizado;
    }
public get_Fecha_envio():number{
    return this.Fecha_envio;
    }
public get_Compañia():string{
    return this.Compañia;
    }

    
public set_ID(ID:number){
    this.ID = ID;
    }
public set_Direccion_Factura(Direccion_Factura:number){
    this.Direccion_Factura = Direccion_Factura;    
    }
public set_Finalizado(Finalizado:string){
    this.Finalizado = Finalizado;
    }
public set_Fecha_envio(Fecha_envio:number){
    this.Fecha_envio = Fecha_envio;
}
public set_Compañia(Compañia:string){
    this.Compañia = Compañia;
}



}