import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Books{
  constructor(
    public id:string,
    public title:string,
    public author:string,
    public genre:string,
  ) {}
}

export class Users{
  constructor(
    public id:string,
    public name:string,
    public birthday:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
  }

  getBooks(){
       return this.httpClient.get<Books[]>('http://localhost:8080/books');
  }

  public deleteBook(book: any) {
    return this.httpClient.delete<Books>("http://localhost:8080/books" + "/"+ book.id);
  }

  public createBook(book: any) {
    return this.httpClient.post<Books>("http://localhost:8080/books", book);
  }

  getUsers(){
       return this.httpClient.get<Users[]>('http://localhost:8080/users');
  }

  public deleteUser(user: any) {
    return this.httpClient.delete<Users>("http://localhost:8080/users" + "/"+ user.id);
  }

  public createUser(user: any) {
    return this.httpClient.post<Users>("http://localhost:8080/users", user);
  }
}
