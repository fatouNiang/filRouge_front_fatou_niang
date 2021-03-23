import { Injectable } from '@angular/core';
import { Referentiel } from '../../_model/referentiel';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  baseUrl=environment.apiUrl;

  getReferentiels():Observable<any>{
    return this.http.get<Referentiel[]>(`${environment.apiUrl}/admin/referentiels`);
  }

  addProfil(body : any){
    return this.http.post(`${this.baseUrl}/admin/referentiels`,
    body, { headers : this.headerJson});
  }
}
