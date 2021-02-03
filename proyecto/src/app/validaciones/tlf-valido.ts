import { Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export function telefonoValido(): ValidatorFn{
    return (telefono: AbstractControl): {[key:string]:any} | null => {
        const munTelefono = telefono.value;
        if(munTelefono>999999999 || munTelefono<600000000){
            return {telefono: "invalido"};
        }else{return null}
    };
}
export function dniValido():ValidatorFn{
    return (dni:AbstractControl):{[key:string]:any} | null => {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        const numero = dni.value.match(/\d+/g);
        let letra =dni.value.match (/[a-z]/gi);
        const letra_eval = letras [numero%23];
        if(letra == null)return {dni: "Falta la letra"};
        else letra= letra.join().toUpperCase();
        if(letra_eval != letra)return {dni: "invalido"};
    }


}