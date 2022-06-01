import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1.component';
import { Control1Module } from 'src/app/controls/control1/control1.module';
import { NotPurePipeModule } from 'src/app/pipes/not-pure.pipe';



@NgModule({
  declarations: [
    C1Component
  ],
  imports: [
    CommonModule,
    NotPurePipeModule,
    Control1Module
  ],
  exports: [C1Component]
})
export class C1Module { }
