import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompetenceService } from 'src/app/_services/competence/competence.service';
import { GrpCompetenceService } from 'src/app/_services/grpCompetence/grp-competence.service';

@Component({
  selector: 'app-edit-groupe-competence',
  templateUrl: './edit-groupe-competence.component.html',
  styleUrls: ['./edit-groupe-competence.component.css']
})
export class EditGroupeCompetenceComponent implements OnInit {

  competences: any;
  private id: any;
  public groupeCompetence:any;

  constructor(
    private competenceService: CompetenceService,
    private grpComptenceService: GrpCompetenceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  editGrpComptence = this.formBuilder.group({
    libelle:["", Validators.required],
    description:["", Validators.required],
    competence:["", Validators.required]
  })

  ngOnInit(): void {
    this.getComptence();
    this.id= this.route.snapshot.paramMap.get('id');
    this.grpComptenceService.getGrpCompetenceId(this.id)
    .subscribe(data=>{
      this.groupeCompetence=data
      this.editGrpComptence.patchValue;
    })
  }

  getComptence(){
    this.competenceService.getCompetences()
    .subscribe(data=>{
      this.competences=data
    })
  }

  onSubmit(){
    this.grpComptenceService.putGrpCompetence(this.editGrpComptence.value, this.id)
      .subscribe(data=>{
        console.log(data);
        alert("modification reussi");
      },
      data=>{
        console.log(data);

        alert("erreur");
      })
    }
}
