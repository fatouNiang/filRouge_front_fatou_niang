import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[]=[];
  p:number = 1;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.userService.getUser()
    .subscribe(data=>{
      this.users= data
    })
  }


  deleteUser(id: any) {
    if (confirm('Etes vous sure de vouloir supprimer')) {
      this.userService.deleteUser(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          alert('supression avec success');
        },
        (error: any) => {
          alert('erreur');
        });
    }
  }
}
