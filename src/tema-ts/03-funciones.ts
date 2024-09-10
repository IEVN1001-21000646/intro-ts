function suma(){
    let x=2;
    let y=4;
    let d=y + x
    console.log(d)

}

function resta(a:number, b:number):number{
    return a-b;
}

const res:number=resta(10,3);
console.log(`La resta es ${res}`)

interface mascotas{
    name:string;
    edad:number;
    raza:string;
    mostrar:()=>void;

}

function calcular(mascota:mascotas, x:number):void{
    mascota.edad += x;
    console.log((mascota));

}

const nuevaMascota:mascotas={
    name:"Fido",
    edad:3,
    raza:"Golden",
    mostrar:()=>{
        console.log(`Hola soy ${nuevaMascota.name} y tengo ${nuevaMascota.edad} años`)
    }
}

console.log(nuevaMascota,4)