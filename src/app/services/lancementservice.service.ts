import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LancementserviceService {

  Url = "https://ll.thespacedevs.com/2.2.0/";

  constructor(private Http: HttpClient) {}

  getAllLaunches(): Observable<any> {
    return this.Http.get(this.Url+"launch");
  }
  getAllagencies(): Observable<any> {
    return this.Http.get(this.Url+"agencies");
  }
}
