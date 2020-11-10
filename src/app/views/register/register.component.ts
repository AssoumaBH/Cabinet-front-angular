import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;
  public color: string;


  constructor(
    public readonly formBuilder: FormBuilder,
    public readonly userService: UserServiceService
  ) {

    this.formGroup = formBuilder.group({
      FirstName: ['', [Validators.minLength(7), Validators.required]],
      Lastname: ['', [Validators.minLength(7), Validators.required]],
      Email: ['', [Validators.minLength(7), Validators.required, Validators.email]],
      Passwrd: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      food: ['', [Validators.required]],
    })


  }

  ngOnInit() {

  }
  signUp() {
    //  var tab = JSON.parse(localStorage.getItem('user')) || [];
    if (this.formGroup.valid) {
      this.userService.pushtolocalstorgeUser(this.formGroup.value)
      console.log(this.formGroup.value);
      console.log('form valid Yes');
      window.location.href = 'auth/login';
    }
    else {
      console.log('form In valid Noo');
      console.log(this.formGroup);
    }
  }

  get FirstName() { return this.formGroup.get('FirstName'); }
  get Lastname() { return this.formGroup.get('Lastname'); }
  get Email() { return this.formGroup.get('Email'); }
  get Passwrd() { return this.formGroup.get('Passwrd'); }


  getvalid() {
    this.color = 'transparent';
    if (this.formGroup.controls['FirstName'].valid) {
      this.color = 'green';
    }

    if (this.formGroup.controls['FirstName'].invalid) {
      this.color = 'red';
    }
  }
  getvalidL() {
    this.color = 'transparent';
    if (this.formGroup.controls['LastName'].valid) {
      this.color = 'green';
    }

    if (this.formGroup.controls['LastName'].invalid) {
      this.color = 'red';
    }
  }
}
