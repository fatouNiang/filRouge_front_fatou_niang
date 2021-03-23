import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilSortie } from 'src/app/_model/profil-sortie';
import { ProfilSortieService } from 'src/app/_services/profilSortie/profil-sortie.service';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.css']
})
export class ListProfilSortieComponent implements OnInit {

  pSorties: ProfilSortie[]= [];
  id:any;
  p:number = 1;

  constructor(
    private pSortie: ProfilSortieService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getProfilSortie();

     this.id= this.route.snapshot.paramMap.get('id');
    this.pSortie.getByIdPSortie(this.id)
    .subscribe(data=>{
      this.pSorties=data;
    });
  }
  getProfilSortie(){
    this.pSortie.getPSortie()
    .subscribe(data=>{
        this.pSorties = data})
  }

  deletePsortie(id :any) {
    //this.id= this.route.snapshot.paramMap.get('id');
    if (confirm('Etes vous sure de vouloir supprimer')) {
      this.pSortie.deletePSortie(id).subscribe(
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
