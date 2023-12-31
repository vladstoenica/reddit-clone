import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { SignupRequestPayload } from './signup-request-payload';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;
  //pt trimis datele de form in backend
  // signupRequestPayload!: SignupRequestPayload;

  constructor(){
    
  }

  ngOnInit(){
      this.signupForm = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
      })
  }

  //pt trimis date in backend
//   signup(){
//     this.signupRequestPayload.email = this.signupForm.get('email')?.value;
//     this.signupRequestPayload.username = this.signupForm.get('username')?.value;
//     this.signupRequestPayload.password = this.signupForm.get('password')?.value;

//     this.authService.signup(this.signupRequestPayload)
//       .subscribe(data => {
//         console.log(data);
//       });
//   }
 }
