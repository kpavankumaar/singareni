import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DataService } from './service/data.service';



@NgModule({
  declarations: [NavbarComponent],
  exports:[NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[DataService]
})
export class CoreModule { }
