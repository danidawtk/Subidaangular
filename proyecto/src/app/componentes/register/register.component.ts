import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { telefonoValido, dniValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    formRegister: FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
        apellidos: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required,]),
        email: new FormControl('',[Validators.required,Validators.email]),
        dni: new FormControl('',[Validators.required]),
        telefono: new FormControl(undefined, [Validators.required])
    })

    formRegister2 = this.fb.group({
        nombre: ['',[Validators.required,Validators.minLength(3)]],
        apellidos: ['',[Validators.required]],
        password: ['',[Validators.required,]],
        email: ['',[Validators.required,Validators.email]],
        dni: ['',[Validators.required, dniValido()]],
        telefono: [undefined, [Validators.required, telefonoValido()]]
    }) 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  evaluaForm(): void{
    console.log("Evaluado formulario")
    console.log(this.formRegister.getRawValue())
    if(this.formRegister.valid) console.log ("el formulario es correcto")
    else console.log("Lo que has introducido no vale ná")
}
get nombre1() {return this.formRegister.get("nombre")}
get email1() {return this.formRegister.get("email")}

}

