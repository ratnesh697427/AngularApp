import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GetUsersService } from 'src/app/_services/getUsers.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // loading = false;
  isInvalid=false;
  status;
  constructor(
    private authservice: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,

    ) {

   }

   ngOnInit()
   {
     this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],

     });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {



        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // this.loading = true;


           if(this.authservice.authenticate(this.f.username.value,this.f.password.value)){

             this.router.navigate(['/traineeHome']);
           }
           else{
             this.router.navigate(['/home']);
             this.isInvalid=true;
             this.loginForm.reset();
           }
    }
}
