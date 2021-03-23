import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilSortie } from 'src/app/_model/profil-sortie';
import { ProfilSortieService } from 'src/app/_services/profilSortie/profil-sortie.service';

@Component({
  selector: 'app-edit-profil-sortie',
  templateUrl: './edit-profil-sortie.component.html',
  styleUrls: ['./edit-profil-sortie.component.css']
})
export class EditProfilSortieComponent implements OnInit {

  private id :any;
  public profilsorti: any;
  editPSortie= this.formBuilder.group({libelle:["", Validators.required]});

  constructor(
    private PSortiService: ProfilSortieService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.PSortiService.getByIdPSortie(this.id)
    .subscribe(data=>{
      this.profilsorti=data;
      this.editPSortie.patchValue(data);
    });

  }

  onSubmit(){
    this.PSortiService.updatePSortie(this.editPSortie.value, this.id)
      .subscribe(data => {
        console.log(data);
        alert('modification reussie')
      },
      (error:any)=>{
        alert('batay baxoul')
      });
  }

}
