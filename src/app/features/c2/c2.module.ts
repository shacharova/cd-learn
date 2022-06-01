import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2.component';
import { Control1Module } from 'src/app/controls/control1/control1.module';
import { NotPurePipeModule } from 'src/app/pipes/not-pure.pipe';



@NgModule({
  declarations: [
    C2Component
  ],
  imports: [
    CommonModule,
    Control1Module,
    NotPurePipeModule
  ],
  exports: [C2Component]
})
export class C2Module { }
