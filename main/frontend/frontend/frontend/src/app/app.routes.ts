import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SpecificgameComponent } from './specificgame/specificgame.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ForumComponent } from './forum/forum.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NotauthorizatedComponent } from './notauthorizated/notauthorizated.component';


export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'regist', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'game/:id', component: SpecificgameComponent},
    {path: 'myprofile', component: MyprofileComponent},
    {path: 'forum', component: ForumComponent},
    {path: 'favourites', component: FavouritesComponent},
    {path: 'notauthorizated', component: NotauthorizatedComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
