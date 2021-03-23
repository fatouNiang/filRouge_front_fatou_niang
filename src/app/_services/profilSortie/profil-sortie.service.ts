import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfilSortie } from 'src/app/_model/profil-sortie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http : HttpClient) { }

  getPSortie(): Observable<any>{
    return this.http.get<ProfilSortie[]>(`${environment.apiUrl}/admin/profilSorties?archivage=0`);
  }

  addPSortie(libelle : string){
    return this.http.post(`${environment.apiUrl}/admin/profilSorties`, {libelle});
  }

  getByIdPSortie(id: any): any{
    return this.http.get(`${environment.apiUrl}/admin/profilSorties/${id}`)
  }

  updatePSortie(body: any, id: any): any {
    return this.http.put(`${environment.apiUrl}/admin/profilSorties/`+ id,
    body, { headers : this.headerJson}
    )
  }

  deletePSortie(id:any): any{
    return this.http.delete(`${environment.apiUrl}/admin/profilSorties/`+ id);
  }


}
