import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { LancementserviceService} from "../../services/lancementservice.service";
import { Router } from "@angular/router";
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../../store/reducer';
export interface Launch {
  results:[]
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launches= [];
  programs=[];
  arr=[];
  
  constructor(private router: Router,
    private lancementService: LancementserviceService) { }

  ngOnInit(): void {
    //recuperraion des données de lancement
    this.lancementService.getAllLaunches().subscribe((data) => {
      this.launches = data.results;
//recupération des 50 premiers lancement
      this.launches=this.launches.splice(0,50);
      console.log(this.launches);  
    });
    //récupération des programmes
     this.lancementService.getAllprogrames().subscribe((data) => {
       this.programs = data.results;    
       console.log(this.programs);  
     });
  }
  details(id:any){
    //verification si il un lancement existe ou non avec le ID de fusé dans le tableau de launcher
    this.arr = this.programs.filter((launcher:any)=>{
      return (launcher.id ===id)
    });
    //s'il existe un lancement (ID existe dans launcher redirection vers détails si non la redirection sera vers une page d'erreur)
    if(this.arr.length!=0){
      this.router.navigate(['/details',id]).then(() => {
        window.location.reload();
      });
    }else{
      this.router.navigate(['/erreur']).then(() => {
        window.location.reload();
      });
    } 
  }
}
