import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3Component } from './c3.component';
import { Control1Module } from 'src/app/controls/control1/control1.module';
import { NotPurePipeModule } from 'src/app/pipes/not-pure.pipe';



@NgModule({
  declarations: [
    C3Component
  ],
  imports: [
    CommonModule,
    Control1Module,
    NotPurePipeModule
  ],
  exports: [C3Component]
})
export class C3Module { }
