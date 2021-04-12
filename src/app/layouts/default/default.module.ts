import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  //to use router-outlet in html, import router module
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
