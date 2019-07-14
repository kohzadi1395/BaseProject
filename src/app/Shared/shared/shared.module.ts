import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}

/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LoadingSpinnerComponent ],
  exports: [ LoadingSpinnerComponent, CommonModule ],
  providers: [ ]
})
export class SharedModule { };
*/
