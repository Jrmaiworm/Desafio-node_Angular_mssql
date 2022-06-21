import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LayoutComponent } from './layout.component';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [
        LayoutComponent,
     
       
    ]
})
export class LoginModule { }