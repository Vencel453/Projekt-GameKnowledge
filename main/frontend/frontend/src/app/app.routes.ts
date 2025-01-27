import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SpecificgameComponent } from './specificgame/specificgame.component';


export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'regist', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: PageNotFoundComponent},         /// Ismeretlen útvonalak kezelése
    {path: 'game/:id', component: SpecificgameComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
