import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//wohin möchte ich navigieren?
import { MenuComponent } from './menu/menu.component';
import { KursDetailComponent } from './kurse/kurs-detail/kurs-detail.component';
import { AddKursComponent } from './kurse/add-kurs/add-kurs.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsermenuComponent } from './admin/usermenu/usermenu.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { KursmenuComponent } from './admin/kursmenu/kursmenu.component';
import { FortschrittComponent } from './users/fortschritt/fortschritt.component';
//routen definieren
const routes: Routes = [
    //Zu jeder Route die ich routen möchte vergebe ich einen Pfad und eine Komponente
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //Standartseite
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'admin/kursmenu', component: KursmenuComponent },
    { path: 'kurs/add', component: AddKursComponent }, //neue komponente in der app.module.ts importieren
    { path: 'kurs/:kursID', component: KursDetailComponent },
    { path: 'user/:userID', component: UserDetailComponent },
    { path: 'admin/usermenu', component: UsermenuComponent },
    { path: 'users/fortschritt', component: FortschrittComponent }
]

//Modul konfigurieren
@NgModule({
    imports: [RouterModule.forRoot(routes)], //Routendefinitionen übergeben um zu konfigurieren
    exports: [RouterModule]
})
export class AppRoutingModule { }