export class Cliente{
    private ID: number =0;
    private direccion:string = "";
    private telefono:number =0;
    private email:string = "";
    
    constructor(ID:number,direccion:string,telefono:number,email:string){
        this.ID = ID;
        this.direccion = direccion;
        this.email = email;
        this.telefono = telefono;
    
    }
    public get_ID():number{
        return this.ID;
    }
    public set_ID(ID:number){
        this.ID=ID;
    }
    public get_direccion():string{
        return this.direccion;
    }
    public set_direccion(direccion:string){
        this.direccion = direccion;
    }
    public get_telefono():number{
        return this.telefono;
    }
    public set_email(email:string){
        this.email = email;
    }
    public get_email():string{
        return this.email;
    }
    public set_telefono(telefono:number){
        this.telefono = telefono;
    }
    
    }