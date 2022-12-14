import { Component, OnInit } from '@angular/core';
import { Books, Borrow, HttpClientService, Users } from '../service/http-client.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  books: Books[] = [];

  users: Users[] = [];

  borrows: Borrow[] = [];


  constructor( private httpClientService:HttpClientService){}

  ngOnInit(): void {
    this.httpClientService.getBooks().subscribe(response => {this.books = response;});
    this.httpClientService.getUsers().subscribe(response => {this.users = response;});
    this.httpClientService.getBorrows().subscribe(response => {this.borrows = response;}); 
  }


  deleteBook(book: Books): void {
    this.httpClientService.deleteBook(book)
      .subscribe( data => {
        this.books = this.books.filter(u => u !== book);
      })
  };
}
