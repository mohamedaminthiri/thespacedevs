import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LancementserviceService} from "../../services/lancementservice.service";
@Component({
  selector: 'app-detail-lancement',
  templateUrl: './detail-lancement.component.html',
  styleUrls: ['./detail-lancement.component.css']
})
export class DetailLancementComponent implements OnInit {
 id:any;
 launchers=[];
  constructor(private activateroute: ActivatedRoute,private lancementService: LancementserviceService) { }

  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params.id;
    console.log(this.id)
    this.lancementService.getAlllaunchers().subscribe((data) => {
      this.launchers = data.results;    
      console.log(this.launchers);  
    });
  }

}
