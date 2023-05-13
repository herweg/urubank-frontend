import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    formReg: FormGroup

    constructor(
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

    }

    onClick() {

    }
}
