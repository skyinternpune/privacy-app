import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PrivacyComponent } from './+privacy/privacy.component';
import { PrivacyService } from './+privacy/privacy.service';
import { PrivacyPipe } from './+privacy/privacy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    PrivacyPipe
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    NgbModule
  ],
  providers: [ PrivacyService ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
