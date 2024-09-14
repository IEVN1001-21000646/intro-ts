import {Figuras} from "./areas";

class Volumenes extends Figuras{

    altura:number;
    volumenCua:number = 0;
    volumenCir:number = 0;
    volumenRect:number = 0;
    
    constructor (baseRec:number,Lado:number,radio:number, altura:number){
        super(baseRec, Lado, radio)
        this.altura = altura;
    }

    public prisma(){

        this.volumenRect = this.rectangulo() * this.altura;
        console.log(`El volumen del  prisma es: ${this.volumenRect}`)  
    }
    public piramide(){

        this.volumenCua = (this.cuadrado() * this.altura)/3;
        console.log(`El volumen de la  piramide es: ${this.volumenCua}`)  
    }
    public cilindro(){

        this.volumenCir = this.circulo() * this.altura;
        console.log(`el volumen del cilindro es ${this.volumenCir}`)  
    }

}

const volumen = new Volumenes(8,5,2.5,7);
volumen.prisma();
volumen.piramide();
volumen.cilindro();