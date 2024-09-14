

export class Figuras{
    protected baseRec:number;
    protected Lado:number;
    protected radio:number;
 
    constructor (baseRec:number,Lado:number,radio:number){
        this.baseRec=baseRec;
        this.Lado=Lado;
        this.radio=radio;
    }

    public rectangulo(){
        //this.areaRect = 
        return this.Lado * this.baseRec;
               
    }
    
    public cuadrado(){
       
        return this.Lado * this.Lado;
        
    }

    public circulo(){
       
        return Math.PI * Math.pow(2,this.radio);
        
    }

}

const figuras = new Figuras(8,5,2.5);
console.log("El area de un rectangulo es: " + figuras.rectangulo());
console.log("el area del cuadrado es: " + figuras.cuadrado());
console.log("El area del circulo es: "+ figuras.circulo());

//rectangulo,cuadrado y circulo

 