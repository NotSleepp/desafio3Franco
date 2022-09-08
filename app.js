let nombre;
let apellido;
let clave=54;
let acceso;
let opcion;
let dinero=0;
let ingreso;
let extracciones=[];
let cargas=[];



function extraerDinero(cantidad){
    dinero = dinero - cantidad;
    return dinero;
}

function extraer(){
    let cantidadExtraccion = prompt("cuanto dinero quiere sacar?: ");
    if(cantidadExtraccion <= dinero && cantidadExtraccion > 0){
      extraerDinero(cantidadExtraccion);
      extracciones.push(cantidadExtraccion);
      alert("Usted retiro: $"+cantidadExtraccion+" \nLe quedan: $"+dinero);
    }else{
      alert("accion imposible de realizar");
    }
}


let tieneClave = prompt("Tiene clave de acceso?: \n1.si \n2.no ");

while(tieneClave == 2){

    nombre = prompt("ingrese su nombre: ");
    apellido = prompt("ingrese su apellido: ");
    clave = prompt("ingrese clave a utilizar: ");

    alert("Datos actualizados!");

    tieneClave = prompt("Tiene clave de acceso?: \n1.si \n2.no ");
}

if(tieneClave == 1){
    acceso = prompt("ingrese clave de acceso: ");
    
    while(acceso == clave){

       opcion = prompt("bienvenida/o "+nombre+" "+apellido+" que desea hacer?\n1.Ver Dinero \n2.Retirar Dinero \n3.Ingresar Dinero \n4.Ver Datos Importantes \n5.Ver todas las extracciones hechas");

       switch (opcion){
        case "1":
            alert("Usted tiene $"+dinero);
            if( dinero > 0)
            {
                let sacarDinero = prompt("Quiere sacar dinero?: \n1.si \n2.no");
                if(sacarDinero == 1){
                    extraer();
                }
            }
            break;
        case "2":
            extraer();
            break;
        case "3":
                ingreso = parseInt(prompt("cuanto dinero desea ingresar?: "));
                dinero = dinero + ingreso;
            break;
        case "4":

            class Person {
                constructor(nomb, apell, din){
                this.nombre = nombre,
                this.apellido = apellido,
                this.dinero = dinero
                }
                mostrarDatos(){
                    alert(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dinero: ${this.dinero}`)
            }}
            const persona = new Person(nombre, apellido, dinero);
            
            persona.mostrarDatos();
                    
            break;
            case "5":

                for(let i = 0; i < extracciones.length; i++){
                    alert("ID de Extraccion: "+i+"\nCantidad de extraccion: $"+extracciones[i])
                }
            break;
        default:
                alert("Error elija una opcion");
            break;
       }
       
    }
    
}

if(tieneClave != 1 || tieneClave !=2){
    alert("error");
}