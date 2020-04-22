import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
 {path: 'main', component: BookListComponent},
 {path: 'login', component: LoginComponent},
 {path: 'registration', component: RegistrationComponent},
 {path: 'editor', component: EditorComponent},
 {path: 'manager', component: ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
