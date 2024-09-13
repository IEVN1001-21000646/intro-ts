class Volumenes extends Figuras{

    basec:number;
    baser:number;
    baseCir:number;

    constructor (alturaRec:number,Lado:number,radio:number, basec:number, baser:number, baseCir:number){
        super(alturaRec, Lado, radio)
        this.baseCir = baseCir;
        this.basec = basec;
        this.baser = baser;
        
    }
}