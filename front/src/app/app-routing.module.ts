import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'books', component: BookComponent},
  {path: 'addbook', component: AddBookComponent},
  {path: 'users', component: UserComponent},
  {path: 'adduser', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
