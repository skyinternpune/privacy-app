import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrivacyComponent } from './+privacy/privacy.component';
import { PrivacyService } from './+privacy/privacy.service';
import { PrivacyPipe } from './+privacy/privacy.pipe';
import { LoginComponent } from './+login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    PrivacyPipe,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [PrivacyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(router: Router) { } }
