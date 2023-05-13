import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formReg: FormGroup

    constructor(
        private readonly router: Router,
        private readonly auth0: AuthService
    ) {
        this.formReg = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })
    }

    ngOnInit(): void {
        this.auth0.isAuthenticated$.subscribe(isAuth => {
            if (isAuth) this.router.navigate(['/dashboard'])
        })
    }

    auth0Login() {
        this.auth0.loginWithRedirect().subscribe()
    }
}
