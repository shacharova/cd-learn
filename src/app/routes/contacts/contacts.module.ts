import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { C1Module } from '../../features/c1/c1.module';
import { C2Module } from '../../features/c2/c2.module';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    C1Module,
    C2Module
  ]
})
export class ContactsModule { }
