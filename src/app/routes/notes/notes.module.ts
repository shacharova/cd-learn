import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { C3Module } from '../../features/c3/c3.module';
import { C4Module } from '../../features/c4/c4.module';


@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    C3Module,
    C4Module
  ]
})
export class NotesModule { }
