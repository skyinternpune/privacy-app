import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PrivacyComponent } from './+privacy/privacy.component';
import { LoginComponent } from './+login/login.component';

const appRoutes: Routes = [
  { path: 'privacy', component: PrivacyComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PrivacyComponent },
  { path: '**', component: PrivacyComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
