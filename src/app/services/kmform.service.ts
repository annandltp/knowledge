import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KmformService {
  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost/knowledge-management-api/index.php/api/'
  }

  public list(): Observable<any> {
    return Observable.create(observer => {
      this.http.get(this.baseUrl + 'get/kmform').subscribe((respond: any) => {
        let outputs: any = [];
        if (respond.data.length > 0) {
          outputs = respond.data
        }
        observer.next(outputs);
        observer.complete(outputs);
        return { unsubcribe() { outputs } };
      });
    });
  }

  public add(data: any): Observable<any> {
    return Observable.create(observer => {
      this.http.post(this.baseUrl + 'add/kmform', JSON.stringify(data)).subscribe((respond: any) => {
        observer.next(respond);
        observer.complete();
        return { unsubcribe() { respond } };
      });

    });
  }

  public delete(data: any): Observable<any> {
    return Observable.create(observer => {
      this.http.post(this.baseUrl + 'delete/kmform', JSON.stringify(data))
        .subscribe((respond: any) => {
          observer.next(respond);
          observer.complete();
          return { unsubcribe() { respond } };
        });
    });
  }

  public update(data: any): Observable<any> {
    return Observable.create(observer => {
      this.http.post(this.baseUrl + 'update/kmform', JSON.stringify(data))
        .subscribe((respond: any) => {
          observer.next(respond);
          observer.complete();
          return { unsubcribe() { respond } };
        });
    });
  }
}
