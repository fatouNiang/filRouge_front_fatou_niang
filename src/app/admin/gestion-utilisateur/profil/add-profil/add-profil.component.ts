import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ProfilService } from 'src/app/_services/profil/profil.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {

  addProfil: FormGroup;
  profil: any=[];

  constructor(
    private profilService: ProfilService,
    private formBuilder: FormBuilder,
    //private router: Router
  ) { }

  ngOnInit(): void {
    this.addProfil= this.formBuilder.group({libelle:["", Validators.required]});

  }

  get f(){return this.addProfil.controls}

  onSubmit(){
    this.profilService.addProfil(this.f.libelle.value)
    .pipe(first()).subscribe(
      data=>{
        alert('success');
        //this.router.navigate(['listProfil'])
      }
    )
  }
}
