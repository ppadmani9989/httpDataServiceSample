import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DataServiceService {

  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get('../assets/sample.json');
  }

}
