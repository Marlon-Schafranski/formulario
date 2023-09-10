import { Component } from '@angular/core';
import { Cliente } from './class/Cliente';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formCliente!: FormGroup
  botao: boolean = false

  constructor(private fb: FormBuilder) {
    this.formCliente = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formCliente.valid) {
      const nome = this.formCliente.value.nome;
      const email = this.formCliente.value.email;
      console.log('Nome:', nome);
      console.log('E-mail:', email);
    }
    else{
      alert('Nome e E-mail deve estar preenchido corretamente \n Exemplo:\n Nome: Maikon \n Email: maikonschafranski12@gmail.com')
    }
  }
}
 

