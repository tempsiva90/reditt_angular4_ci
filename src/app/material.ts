
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {MdSnackBarModule,MdIconModule} from '@angular/material';


@NgModule({
  
  imports: [
          BrowserAnimationsModule,
          MaterialModule,
          MdNativeDateModule,
          MdIconModule,
          MdSnackBarModule
         

  ],
 exports:[
       BrowserAnimationsModule,
          MaterialModule,
          MdSnackBarModule,
          MdIconModule,
          MdNativeDateModule
         
 ]
})
export class AppMaterialModule { }
