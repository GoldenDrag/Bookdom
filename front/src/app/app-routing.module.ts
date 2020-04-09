import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: 'books', component: PreviewComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'detail/:id', component: BookDetailComponent },
  {path: 'post', component:PostComponent},
  {path:'about',component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
