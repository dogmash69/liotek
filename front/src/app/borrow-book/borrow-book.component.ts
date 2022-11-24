import { Component, OnInit } from '@angular/core';
import { Books, Borrow, HttpClientService, Users } from '../service/http-client.service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  books: Books[] = [];

  users: Users[] = [];

  borrow: Borrow = new Borrow("", "", "");


  constructor( private httpClientService:HttpClientService){}

  ngOnInit(): void {
    this.httpClientService.getBooks().subscribe(response => {this.books = response;});
    this.httpClientService.getUsers().subscribe(response => {this.users = response;});
  }

  createBorrow(): void {
    let test = this.borrow
    console.log(test)
    this.httpClientService.createBorrow(this.borrow)
        .subscribe( data => {
          alert("Book created !");
        });

  };


}
