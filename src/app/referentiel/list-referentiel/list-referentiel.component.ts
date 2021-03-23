import { Component, OnInit } from '@angular/core';
import { ReferentielService } from 'src/app/_services/referentiel/referentiel.service';

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {

  //tabRef = [1,2,3,4,5,6,7,8];
  tabRef: any;
  constructor(private refService: ReferentielService) { }

  ngOnInit(): void {
    this.getReferentiels();
  }
getReferentiels(){
  this.refService.getReferentiels()
  .subscribe(data=>{
    console.log(data);

    this.tabRef= data
  })
}
}
