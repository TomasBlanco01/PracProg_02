import {paridad} from "./par_impar.js";
export function corroborar_dato(dato){
    
    if (dato[dato.length - 1] != ';'){
        return 0;
    }

    for (let i = 0; i <= (dato.length - 1); i++){    
        if(paridad(i) == true){
            if (isNaN(dato[i]) == false){
                Number(dato[i]);
            } else {
                return 0;
            }
        } else {
            if(isNaN(dato[i]) == true){
                if (dato[i] != '+' && dato[i] != '-' && dato[i] != '/' && dato[i] != '*'){
                    return 0;
                }
                if (dato[i] == '/'){
                    if (dato[i+1] == 0){
                        return 0;
                    }
                }
            } else {
                return 0;
            }
        } 
    }

    return 1;
}