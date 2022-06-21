import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
const loginModule  = () => import('./login/login.module').then(x => x.LoginModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const costumersModule = () => import('./costumers/costumers.module').then(x => x.CostumersModule);

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', loadChildren: usersModule },
    { path: 'costumers', loadChildren: costumersModule },
    { path: 'login', loadChildren: loginModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }