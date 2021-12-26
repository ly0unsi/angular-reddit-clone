import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from './signupRequestPayoad';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  signupRequestPayoad:SignupRequestPayload;
  registerSuccessMessage: string;
  constructor(private authService:AuthService,private router:Router,private toastr: ToastrService) {
    this.signupRequestPayoad={
      username:'',
      email:'',
      password:''
    }
  }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      username:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)

    });

  }
  signup(){
    this.signupRequestPayoad.email=this.signupForm.get('email')?.value;
    this.signupRequestPayoad.username=this.signupForm.get('username')?.value;
    this.signupRequestPayoad.password=this.signupForm.get('password')?.value;
    this.authService.signup(this.signupRequestPayoad)
    .subscribe(data => {
      this.router.navigate(['/login'],
        { queryParams: { registered: 'true' } });
    }, error => {
      console.log(error);
      this.toastr.error('Registration Failed! Please try again');
    });
  }
}
