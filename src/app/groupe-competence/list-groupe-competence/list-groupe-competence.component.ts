import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrpCompetence } from 'src/app/_model/grp-competence';
import { CompetenceService } from 'src/app/_services/competence/competence.service';
import { GrpCompetenceService } from 'src/app/_services/grpCompetence/grp-competence.service';

@Component({
  selector: 'app-list-groupe-competence',
  templateUrl: './list-groupe-competence.component.html',
  styleUrls: ['./list-groupe-competence.component.css']
})
export class ListGroupeCompetenceComponent implements OnInit {

  tabGrpCompetence: any;
  p:number = 1;


  constructor(private grpCompetence: GrpCompetenceService) { }

  ngOnInit(): void {
    this.getGrpCompetences()
  }

  getGrpCompetences(){
    this.grpCompetence.getGrpCompetences()
    .subscribe(data=>{
        this.tabGrpCompetence = data
      })
  }

  clickCompetence(){
    alert("ok")
  }
}

