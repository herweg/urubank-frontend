import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formReg: FormGroup

    constructor(
        //private readonly authService: AuthService,
        private readonly router: Router,
        public auth: AuthService
    ) {
        this.formReg = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })
    }

    ngOnInit(): void {
        this.auth.isAuthenticated$.subscribe(isAuthenticated => {
            if (isAuthenticated) this.router.navigate(['/main'])
        })
    }

    // onSubmit() {
    //     this.authService.login(this.formReg.value)
    //         .then(response => {
    //             console.log(response);
    //             this.router.navigate(['/main'])

    //         })
    //         .catch(err => console.log(err))
    // }

    auth0Login() {
        this.auth.loginWithRedirect().subscribe()
    }

    onClick() {

    }
}
