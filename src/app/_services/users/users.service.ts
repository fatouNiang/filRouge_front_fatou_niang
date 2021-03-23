import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // headerFormData: HttpHeaders | { [header: string]: string | string[]; };

  private headerFormData = new HttpHeaders({Accept: '*/*'});
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/admin/users?archivage=0`);
  }

  addUser(body: FormData): any{
    return this.http.post(`${environment.apiUrl}/admin/users`,
     body, { headers : this.headerFormData} );
  }

  editUser(users: User){
    return this.http.put(`${environment.apiUrl}/admin/users`,users);
  }

  getUsersById(id: any): any{
    return this.http.get (`${environment.apiUrl}/admin/users/` + id);
  }

  putUsers( body: FormData, id: number): any{
   return this.http.put(`${environment.apiUrl}/admin/users/` + id,
    body, { headers : this.headerFormData} );
  }

  deleteUser(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/profils/` + id);
  }
}
