import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService, private fb:FormBuilder, private route:Router){}

  // loginForm=new FormGroup({
  //   email:new FormControl(''),
  //   password: new FormControl('')
  // })
  loginForm = this.fb.group({
    email: ['',[ Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  onSubmitLogin(){
    // this.userService.login(this.loginForm.getRawValue()).subscribe({
    //   next: (value)=> {

    //   },
    //   error: ()=>{

    //   }
    // })
    console.log(this.loginForm.value)
     this.route.navigate(['patient-dashboard/home']);
  }



}
