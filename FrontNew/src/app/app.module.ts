import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { ManagerComponent } from './manager/manager.component'
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LoginComponent,
    RegistrationComponent,
    EditorComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
