import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competence } from 'src/app/_model/competence';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  baseUrl = environment.apiUrl;
  private headerJson = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  getCompetences():Observable<any>{
    return this.http.get<Competence[]>(`${environment.apiUrl}/admin/competences`)
  }

  addCompetence(body: any){
    return this.http.post(`${environment.apiUrl}/admin/competences`,
        body, { headers : this.headerJson } );
  }

  getCompetenceId(id): Observable<any>{
    return this.http.get(`${environment.apiUrl}/admin/competences/${id}`)
  }

  putCompetence(body: any, id: number): any {
    return this.http.put(`${environment.apiUrl}/admin/competences/`+ id,
    body, { headers : this.headerJson})
  }

  deleteCompetence(id:any): any{
    return this.http.delete(`${environment.apiUrl}/admin/competences/`+ id);
  }
}
