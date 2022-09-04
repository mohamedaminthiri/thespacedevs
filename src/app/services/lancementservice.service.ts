import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LancementserviceService {

  Url = "https://ll.thespacedevs.com/2.2.0/";

  constructor(private Http:HttpClient) {}
//recupérer tous les lancements
  getAllLaunches(): Observable<any> {
    return this.Http.get(this.Url+"launch");
  }
  //recupération de tous les programmes de lancement
  getAllprogrames(): Observable<any> {
    return this.Http.get(this.Url+"program");
  }
    //recupération de tous les agences
    getAllagencies(): Observable<any> {
      return this.Http.get(this.Url+"agencies");
    }
}
