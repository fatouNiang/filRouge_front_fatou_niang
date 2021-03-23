import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../_services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
  }
  deconnexion(){
    this.authService.logout();
  }
}
 