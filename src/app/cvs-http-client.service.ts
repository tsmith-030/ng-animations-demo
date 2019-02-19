import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CVSHttpClient {
  constructor(private http: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

}
