import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  enviar() {
    console.log(this.contactForm);
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

}
