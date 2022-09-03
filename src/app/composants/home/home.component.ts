import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { LancementserviceService} from "../../services/lancementservice.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launches= [];
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
  }
  details(){
    this.router.navigate(['/details']).then(() => {
      window.location.reload();
    });
  }

}
