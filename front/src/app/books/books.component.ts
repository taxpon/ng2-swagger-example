import {Component, OnInit} from '@angular/core';

import * as api from '../api_client/api/api';
import * as models from '../api_client/model/models';

@Component({
    selector: 'books',
    template: `
<div>Book List</div>
<div>
    <ul>
        <li *ngFor="let book of books;">
        <a [routerLink]="['/books', book.id]">
        {{ book.title }}
        </a>
        </li>
    </ul>
</div>
`
})
export class BooksComp implements OnInit{

    books: models.Book[];

    constructor(private booksApi: api.BooksApi) {}

    ngOnInit() {
        this.booksApi.getBooksList()
            .subscribe(
                (result) => {
                    this.books = result;
                }
            )
    }
}
