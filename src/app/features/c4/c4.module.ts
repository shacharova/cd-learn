import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C4Component } from './c4.component';
import { Control1Module } from 'src/app/controls/control1/control1.module';
import { NotPurePipeModule } from 'src/app/pipes/not-pure.pipe';



@NgModule({
  declarations: [
    C4Component
  ],
  imports: [
    CommonModule,
    Control1Module,
    NotPurePipeModule
  ],
  exports: [C4Component]
})
export class C4Module { }
