import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Um Einträge ändern zu können
import { NgModule, Component } from '@angular/core';

import { MatToolbarModule, MatListModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule, MatGridListModule } from '@angular/material';

import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KursDetailComponent } from './kurse/kurs-detail/kurs-detail.component';
import { AppRoutingModule } from './app-routing.module'; //Das Modul wird hier referenziert
import { KurseService } from './kurse.service';
import { DeleteDialogComponent } from './delete-dialog.component';
import { AddKursComponent } from './kurse/add-kurs/add-kurs.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsermenuComponent } from './admin/usermenu/usermenu.component';
import { KursmenuComponent } from './admin/kursmenu/kursmenu.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FortschrittComponent } from './users/fortschritt/fortschritt.component';



@NgModule({
  declarations: [
      AppComponent,
      MenuComponent,
      KursDetailComponent,
      DeleteDialogComponent,
      AddKursComponent,
      UserDetailComponent,
      UsermenuComponent,
      KursmenuComponent,
      LoginComponent,
      RegistrationComponent,
      FortschrittComponent
  ],
  entryComponents: [DeleteDialogComponent],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatToolbarModule,
      HttpModule,
      FlexLayoutModule,
      MatListModule,
      MatProgressSpinnerModule,
      AppRoutingModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatMenuModule,
      MatGridListModule
  ],
  exports: [],
  providers: [KurseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
