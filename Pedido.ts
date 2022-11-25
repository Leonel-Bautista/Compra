export class Pedido{

    private id : number= 0;
    private Direccion_factura: string= "";
    private finalizado: string= "";
    private Fecha_Envio: number =0;
    private compañia:string="";

    constructor(id:number,Direccion_factura:string,finalizado:string,Fecha_Envio:number,compañia:string){
        this.id = id;
        this.Direccion_factura = Direccion_factura;
        this.finalizado = finalizado;
        this.Fecha_Envio = Fecha_Envio;
    }
    public get_id():number{
        return this.id;
    }
    public get_Direccion_factura():string{
        return this.Direccion_factura;
    }
    public get_finalizado():string{
        return this.finalizado;
    }
    public get_Fecha_Envio():number{
        return this.Fecha_Envio;
    }
    public get_compañia():string{
       return this.compañia;
    }
    public set_id(id:number){
        this.id=id;
    }
    public set_Direccion_factura(Direccion_factura:string){
        this.Direccion_factura = Direccion_factura;
    }
    public set_finalizado(finalizado:string){
        this.finalizado=finalizado;
    }
    public set_Fecha_Envio(Fecha_Envio:number){
        this.Fecha_Envio = Fecha_Envio;
    }  
    public set_compañia(compañia:string){
        this.compañia=compañia;
    }

}