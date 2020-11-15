import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  currentUser = null;
  isAuth : Boolean;
  getProducts() {
    return this.httpClient.get('/api/v1/product');
  }

  searchProduct(limit: Number, query: String) {
    return this.httpClient.get(
      '/api/v1/product?limit=' + limit + '&query=' + query
    );
  }

  submitProduct(name: String, price: Number, desc: String, thumbnail: String) {
    return this.httpClient
      .post('/api/v1/product/submit', {
        name: name,
        price: price,
        desc: desc,
        thumbnail: thumbnail,
        submitter: this.currentUser,
      })
      .pipe(catchError(this.handleError));
  }

  signIn(email: String, password: String) {
    return this.httpClient
      .post('/api/v1/auth/login', { email: email, password: password })
      .pipe(catchError(this.handleError));
  }

  register(email: String, password: String) {
    return this.httpClient
      .post('/api/v1/auth/register', { email: email, password: password })
      .pipe(catchError(this.handleError));
  }

  checkAuth() {
    return this.httpClient
      .get('/api/v1/auth/check')
      .pipe(catchError(this.handleError));
  }

  getUser(userId : String) {
    return this.httpClient
    .get('/api/v1/user/' + userId)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert('An error occurred:' + error.error.message);
    } else {
      var message: String = error.error.msg;
      if (message === undefined) {
        message = 'There was an error! Please try again.';
      }
      alert(message);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
