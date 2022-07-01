console.log ("CALCULATORE 1.0")

import { corroborar_dato } from "./corrobora.js";

var dato = prompt("ingrese la cuenta:");

if(corroborar_dato(dato) == 1){
    console.log(dato + " resultado: ACEPTADA.");
} else {
    console.log(dato + " resultado: RECHAZADA.");
}