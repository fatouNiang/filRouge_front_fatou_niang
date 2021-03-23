import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  private id: any;
  public user: any= [];
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDetailUser();
  }

getDetailUser(){
  this.id = this.route.snapshot.paramMap.get('id'); // il permet recuperer la valeur de l'id
  this.userService.getUsersById(this.id)
  .subscribe((data) => {
      this.user = data;
  });
}


}
