import { Routes, RouterModule } from '@angular/router';
import { BooksComp, SingleBookComp } from './books';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: BooksComp },
  { path: 'books', component: BooksComp},
  { path: 'books/:id', component: SingleBookComp},
  { path: '**',    component: NoContent },
];
