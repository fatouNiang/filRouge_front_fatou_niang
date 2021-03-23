import { Component } from '@angular/core';
import { AuthentificationService } from './_services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged: string;

  constructor(private authService: AuthentificationService){

    this.authService.connexion.subscribe(
      data=>{
        if(data!==null ){
          localStorage.setItem('connexion',data)
        }else{
          localStorage.setItem('connexion',String(false))

        }
        this.logged= localStorage.getItem('connexion');
        console.log(this.logged);

      }
    )
  }


}
