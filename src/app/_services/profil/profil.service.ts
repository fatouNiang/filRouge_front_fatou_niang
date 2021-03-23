import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/_model/profil';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});

  baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }
  getProfils():Observable<any>{
    return this.http.get<Profil[]>(`${environment.apiUrl}/admin/profils?archivage=0`)
  }
  addProfil(libelle : string){
    return this.http.post(`${this.baseUrl}/admin/profils`, {libelle});
  }

  putProfils(body: any, id: number): any{
    return this.http.put(`${environment.apiUrl}/admin/profils/` + id,
      body, { headers : this.headerJson}
    );
  }
  getProfilsById(id: any)  {
    return this.http.get (`${environment.apiUrl}/admin/profils/` + id);
  }
  deleteProfils(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/profils/` + id);
  }
}
