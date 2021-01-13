import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { CreateTaskDialogueComponent } from './component/create-task-dialogue/create-task-dialogue.component';
import { MatDatepickerModule } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthGuardService } from './component/auth/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    HeaderComponent,
    CreateTaskDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule,AuthGuardService,JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
