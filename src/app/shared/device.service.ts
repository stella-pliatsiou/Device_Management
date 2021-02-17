import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Device } from './device';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  // HttpClient API post() method => Create Device
  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.apiURL + '/employees/', JSON.stringify(device), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch device
  getDevice(): Observable<Device> {
    return this.http.get<Device>(this.apiURL + '/employees/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update Device
  update(serialnumber: string, device): Observable<Device> {
    return this.http.put<Device>(this.apiURL + '/employees/' + serialnumber, JSON.stringify(device), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete Device
  delete(serialnumber: string) {
    return this.http.delete<Device>(this.apiURL + '/employees/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API deleteAll() method => Delete all Device
  deleteAll(): Observable<any> {
    return this.http.delete(this.apiURL + '/employees/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }



}







