import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrpCompetence } from 'src/app/_model/grp-competence';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrpCompetenceService {

  baseUrl = environment.apiUrl;

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private http: HttpClient) { }

  getGrpCompetences():Observable<any>{
    return this.http.get<GrpCompetence[]>(`${environment.apiUrl}/admin/groupe_competences`)
  }

  addGrpCompetence(body: any){
    return this.http.post(`${environment.apiUrl}/admin/groupe_competences`,
        body, { headers : this.headerJson } );
  }


  getGrpCompetenceId(id): Observable<any>{
    return this.http.get(`${environment.apiUrl}/admin/groupe_competences/${id}`)
  }

  putGrpCompetence(body: any, id: number): any {
    return this.http.put(`${environment.apiUrl}/admin/groupe_competences/`+ id,
    body, { headers : this.headerJson}
    )
  }

  deleteGrpCompetence(id:any): any{
    return this.http.delete(`${environment.apiUrl}/admin/groupe_competences/`+ id);
  }
}
