import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Control1Component } from 'src/app/controls/control1/control1.component';
import { NotPurePipeModule } from 'src/app/pipes/not-pure.pipe';



@NgModule({
  declarations: [Control1Component],
  imports: [
    CommonModule,
    NotPurePipeModule
  ],
  exports: [Control1Component]
})
export class Control1Module { }
