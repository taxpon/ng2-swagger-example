import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as api from '../api_client/api/api';
import * as models from '../api_client/model/models';

@Component({
    selector: 'single-book',
    template: `
    <div><a routerLink="/books">Back to list</a></div>
    <div *ngIf="!book">Loading Book...</div>
    <div *ngIf="book">
        <dl>
            <dt>ID</dt>
            <dd>{{ book.id }}</dd>
            <dt>Title</dt>
            <dd>{{ book.title }}</dd>
            <dt>Author</dt>
            <dd>{{ book.author }}</dd>
        </dl>
    </div>
`
})
export class SingleBookComp implements OnInit {

    book: models.Book;

    constructor(private route: ActivatedRoute,
                private booksApi: api.BooksApi) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params['id'];
            this.booksApi.getBookById(id).subscribe(
                book => {
                    this.book = book;
                }
            )
        });
    }
}
