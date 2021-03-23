import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfilService } from 'src/app/_services/profil/profil.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

   public profil: any;
   private id : any;
  editProfil= this.formBuilder.group({libelle:["", Validators.required]});

  constructor(
    private profilService: ProfilService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.profilService.getProfilsById(this.id)
    .subscribe(data=>{
      this.profil=data;
      this.editProfil.patchValue(data);
    })

  }

  onSubmit(){
    this.profilService.putProfils(this.editProfil.value, this.id)
      .subscribe(data=>{
        console.log(data);

        alert('modification reussie');
      }
      ,error=>{
        alert("echec");
      }

    )
  }
}
