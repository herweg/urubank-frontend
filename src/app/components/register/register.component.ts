import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    formReg: FormGroup

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) {
        this.formReg = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })
    }

    ngOnInit(): void {

    }

    onSubmit() {
        this.authService.register(this.formReg.value)
            .then(response => {
                console.log(response);
                this.router.navigate(['/login'])

            })
            .catch(err => console.log(err))
    }

    onClick() {

    }
}
