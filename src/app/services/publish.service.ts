import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublishService {
  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost/knowledge-management-api/index.php/api/'
  }

  public list(data: any): Observable<any> {
    return Observable.create(observer => {
      this.http.post(this.baseUrl + 'get_publish/kmform', JSON.stringify(data)).subscribe((respond: any) => {
        observer.next(respond);
        observer.complete();
        return { unsubcribe() { respond } };
      });

    });
  }

}
