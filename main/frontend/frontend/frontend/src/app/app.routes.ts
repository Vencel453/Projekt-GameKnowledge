import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SpecificgameComponent } from './specificgame/specificgame.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NotauthorizatedComponent } from './notauthorizated/notauthorizated.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { UsertermsComponent } from './userterms/userterms.component';


export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'regist', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'game/:id', component: SpecificgameComponent},
    {path: 'myprofile', component: MyprofileComponent},
    {path: 'favourites', component: FavouritesComponent},
    {path: 'notauthorizated', component: NotauthorizatedComponent},
    {path: 'socialmedia', component: SocialmediaComponent},
    {path: 'copyright', component: CopyrightComponent},
    {path: 'dataprotection', component: DataprotectionComponent},
    {path: 'userterms', component: UsertermsComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
