class Vehiculo{
    constructor(nombre, tipo){
        this.nombre = nombre;
    }
}
//declarando el objeto
let Vehiculo1 = document.getElementById("vehiculo").value;
const VehiculoUno = new Vehiculo(Vehiculo1, tipo1);
//imprimiendo en consola

//herencia
class Serie extends Vehiculo{
    constructor(nombre, tipo, anio){
        super(nombre);
        this.tipo = tipo; 
        this.anio = anio;
    }
}

let tipo = document.getElementById("tipo").value;
let anio = document.getElementById("anio").value;
alert("Es un vehiculo" + nombre + tipo + anio);
