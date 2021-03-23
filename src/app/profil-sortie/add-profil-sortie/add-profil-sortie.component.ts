import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProfilSortieService } from 'src/app/_services/profilSortie/profil-sortie.service';

@Component({
  selector: 'app-add-profil-sortie',
  templateUrl: './add-profil-sortie.component.html',
  styleUrls: ['./add-profil-sortie.component.css']
})
export class AddProfilSortieComponent implements OnInit {

  addPSortie: FormGroup;
  profilSortie: any=[]

  constructor(
    private profilSortiService: ProfilSortieService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.onSubmit();
    this.addPSortie= this.formBuilder.group(
      {libelle:["", Validators.required]}
      );

  }
  get f(){return this.addPSortie.controls}

  onSubmit(){
    this.profilSortiService.addPSortie(this.f.libelle.value)
    .pipe(first()).subscribe(
      data=>{
        //console.log(data);

        alert('success');
        //this.router.navigate(['listProfil'])

      }
    )
  }

}
