import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Competence } from 'src/app/_model/competence';
import { CompetenceService } from 'src/app/_services/competence/competence.service';
import { GrpCompetenceService } from 'src/app/_services/grpCompetence/grp-competence.service';

@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.css']
 })
export class AddGroupeCompetenceComponent implements OnInit {

  competences: any;
  tabValueCompetence: string[]=[];

  constructor(
    private competenceService: CompetenceService,
    private grpComptenceService: GrpCompetenceService,
    private formBuilder: FormBuilder
  ) { }

  addGrpComptence = this.formBuilder.group({
    libelle:["", Validators.required],
    description:["", Validators.required],
    comptences:[[], Validators.required]
  })

  ngOnInit(): void {
    this.getComptence();
  }

  getComptence(){
    this.competenceService.getCompetences()
    .subscribe(data=>{
      this.competences=data
    })
  }

  getValueCompetence(data: any){

    this.tabValueCompetence.push(data);
    //this.addGrpComptence.controls.competences.value(this.tabValueCompetence);
    //console.log(this.addGrpComptence.controls.competences.value);
    this.addGrpComptence.controls.competences.value;
    console.log(this.addGrpComptence.controls.competences.value);


  }

  onSubmit(){
    this.grpComptenceService.addGrpCompetence(this.addGrpComptence.value)
      .subscribe(data=>{
        console.log(data);
        alert("sucess");
      },
      data=>{
        console.log(data);

        alert("erreur");
      })
  }
}
