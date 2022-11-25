export class Pago{

    private id : number= 0;
    private Fecha_pago: number= 0;
    private pago: number =0;

    constructor(id:number,Fecha_pago:number,pago:number){
        this.id = id;
        this.Fecha_pago = Fecha_pago;
        this.pago = pago;
    }
    public get_id():number{
        return this.id;
    }
    public get_Fecha_pago():number{
        return this.Fecha_pago;
    }
    public get_pago():number{
        return this.pago;
    }
    public set_id(id:number){
        this.id=id;
    }
    public set_Fecha_pago(Fecha_pago:number){
        this.Fecha_pago=Fecha_pago;
    }
    public set_pago(pago:number){
        this.pago=pago;
    }


}