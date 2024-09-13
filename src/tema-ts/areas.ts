class Figuras{
    protected alturaRec:number;
    protected Lado:number;
    protected radio:number;
    

    constructor (alturaRec:number,Lado:number,radio:number){
        this.alturaRec=alturaRec;
        this.Lado=Lado;
        this.radio=radio;
        
    }

    public rectangulo(){

        console.log(`el area del rectangulo es ${this.alturaRec * this.Lado}`)
        

        
    }

    public cuadrado(){
        
        console.log(`el area del cuadrado es ${this.Lado * this.Lado}`)
        
    }

    public circulo(){

        console.log(`el area del circulo es ${Math.PI * Math.pow(2,this.radio)}`)
        
        Math.PI * Math.pow(2,this.radio);
        
    }

    



    
}


const figuras = new Figuras(8,5,2.5);
figuras.rectangulo();
figuras.cuadrado();
figuras.circulo();


//rectangulo,cuadrado y circulo

 