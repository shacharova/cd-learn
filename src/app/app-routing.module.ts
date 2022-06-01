import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contacts', loadChildren: () => import('./routes/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'notes', loadChildren: () => import('./routes/notes/notes.module').then(m => m.NotesModule) },
  { path: '**', redirectTo: 'contacts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
