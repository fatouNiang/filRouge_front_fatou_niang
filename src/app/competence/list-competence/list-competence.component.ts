import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Competence } from 'src/app/_model/competence';
import { CompetenceService } from 'src/app/_services/competence/competence.service';
import { GrpCompetenceService } from 'src/app/_services/grpCompetence/grp-competence.service';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.css']
})
export class ListCompetenceComponent implements OnInit {

  tabCompetence: Competence[]=[];
  tabGrpCompetence:any;
  curentGrpCompetence: any;
  select=new FormControl('');
  curentCompetence: any;


  constructor(private competenceService: CompetenceService,
  private grpcompetenceService: GrpCompetenceService) { }

  ngOnInit(): void {
    this.getCompetences();
    this.getGrpCompetences();
  }

  changeSelect(){

    const compt = this.select.value;
    this.curentGrpCompetence= this.tabGrpCompetence[+compt];
    if(this.curentGrpCompetence.competences){

      this.curentCompetence= this.curentGrpCompetence.competences[0];

    }

  }

  clickCompetence(index){

    this.curentCompetence= this.curentGrpCompetence.competences[+index];
    
  }
getCompetences(){
  this.competenceService.getCompetences()
  .subscribe(data=>{
    console.log(data);

    this.tabCompetence= data

  })
}

getGrpCompetences(){
  this.grpcompetenceService.getGrpCompetences()
  .subscribe(data=>{
      this.tabGrpCompetence = data;

      this.curentGrpCompetence=data[0];


    })
}

}
