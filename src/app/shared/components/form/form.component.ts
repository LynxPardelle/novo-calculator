import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
/* Modules */
import { SharedModule } from '../../shared.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, SharedModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  userFormGroup: TUser;

  constructor(private formBuilder: FormBuilder){
    this.userFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      phone: this.formBuilder.control(null),
      email: this.formBuilder.control(''),
      userName: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    })

  }

  registerUser(){

  }
}
