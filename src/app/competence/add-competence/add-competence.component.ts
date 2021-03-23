import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompetenceService } from 'src/app/_services/competence/competence.service';
import { GrpCompetenceService } from 'src/app/_services/grpCompetence/grp-competence.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

   grpCompetences: any;
   addCompetence: FormGroup;

  constructor(private grpCompetenceService: GrpCompetenceService,
    private competenceService: CompetenceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGrpCompetences();
  }

  getGrpCompetences(){
    this.grpCompetenceService.getGrpCompetences()
    .subscribe(data=>{

      this.grpCompetences=data
    })
  }

}
