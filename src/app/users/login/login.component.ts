import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService, private fb:FormBuilder){}

  // loginForm=new FormGroup({
  //   email:new FormControl(''),
  //   password: new FormControl('')
  // })
  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.minLength(0)]
  })
  onSubmitLogin(){
    this.userService.login(this.loginForm.getRawValue()).subscribe({
      next: (value)=> {

      },
      error: ()=>{
        
      }
    })
  }

}
