import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profil } from 'src/app/_model/profil';
import { ProfilService } from 'src/app/_services/profil/profil.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  profils: Profil[]= [];
  private id:any;
  public profil: any;

  constructor(
    private profilService: ProfilService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getProfil();
    this.id= this.route.snapshot.paramMap.get('id');
    this.profilService.getProfilsById(this.id)
    .subscribe(data=>{
      this.profil=data;
    })

  }
  getProfil(){
    this.profilService.getProfils()
    .subscribe(data=>{
        this.profils = data})
  }

   deleteProfil(id :any) {
    if (confirm('Etes vous sure de vouloir supprimer')) {
      this.profilService.deleteProfils(id).subscribe(
        (data: any) => {
          console.log(data);
          alert('supression avec success');
        },
        (error: any) => {
          console.log(error);

          alert('erreur');
        });
    }
  }
  
}
