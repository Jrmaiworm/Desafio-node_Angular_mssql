﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AlertService, LoginService } from '@app/_services';
import { MustMatch } from '@app/_helpers';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    id!: string;
    isAddMode!: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private loginService: LoginService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
        this.form = this.formBuilder.group({
         
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
            confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
        }, formOptions);

        if (!this.isAddMode) {
            this.userService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // // reset alerts on submit
        // this.alertService.clear();

        // // stop here if form is invalid
        // if (this.form.invalid) {
        //     return;
        // }

        this.loading = true;
        if (this.isAddMode) {
         
           this.login();
        } 
    }

    private login() {
        this.loginService.login(this.form.value)
            .pipe(first())
            .subscribe(() => {
                this.alertService.success('Bem vindo', { keepAfterRouteChange: true });
                this.router.navigate(['../home'], { relativeTo: this.route });
            })
            .add(() => this.loading = false);
    }

}
