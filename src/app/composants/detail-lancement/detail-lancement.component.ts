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
 programs=[];
 program=[];
  constructor(private activateroute: ActivatedRoute,private lancementService: LancementserviceService) { }

  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params.id;
    console.log(this.id)
    this.lancementService.getAllprogrames().subscribe((data) => {
      this.programs = data.result;    
      console.log(this.programs); 
      this.program = this.programs.filter((program:any)=>{
        return (program.id ===this.id)
      }); 
    });
  }
}
