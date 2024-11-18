import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { KezdolapComponent } from './kezdolap/kezdolap.component';


export const routes: Routes = [
    {path: '', component: KezdolapComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
