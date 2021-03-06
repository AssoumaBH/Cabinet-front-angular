import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
 
  public formGroup: FormGroup
  constructor(
    public readonly formBuilder: FormBuilder,
    public readonly userService: UserServiceService

  ) {
    this.formGroup = formBuilder.group({
      email: ['', [Validators.minLength(7), Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]]
    })


  }

  ngOnInit() {
  }

  authentification() {
    var tab = JSON.parse(localStorage.getItem("user")) || [];
    var psw = this.formGroup.controls['password'].value;
    var mail = this.formGroup.controls['email'].value;
    console.log('passs', psw);
    console.log('mail', mail);



    for (let i = 0; i < tab.length; i++) {
      if (tab[i].Email == mail && tab[i].Passwrd == psw ) {
       
          if(tab[i].food==='user'){
            localStorage.setItem('connectedUser', JSON.stringify(tab[i]));
            console.log('yes ath valid userr')
            alert('user')
          }
          else{
            localStorage.setItem('connectedUser', JSON.stringify(tab[i]));
            console.log('yes ath valid adminn')
            alert('admin')
          }
      }
      else {
        console.log('errrrreur')
      }
    }


  }
}