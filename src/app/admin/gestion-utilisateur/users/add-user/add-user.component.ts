import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Profil } from 'src/app/_model/profil';
import { User } from 'src/app/_model/user';
import { ProfilService } from 'src/app/_services/profil/profil.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  //registerUser: FormGroup;
  user: any;
  userModel: User[]=[];
  profils: any;

  fileToUpload: File;

  urllink:string = "assets/SA.jpg";

  //   selectFiles(event){
  //     if(event.target.files){
  //       var reader = new FileReader()
  //       reader.readAsDataURL(event.target.files[0])
  //       reader.onload = (event:any)=>{
  //         this.urllink = event.target.result
  //       }
  //     }
  // }

  selectFiles(e: any): any {
    if (e.target.files && e.target.files[0]) {
      this.fileToUpload = e.target.files[0];
      // console.log( this.formdata.controls.profils.value);
      // tslint:disable-next-line:prefer-const
      let reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        console.log(event);
        this.urllink = event.target.result;
      }
    }
  }


  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private profilservice: ProfilService) { }

    registerUser = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
       password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      profil: ['', [Validators.required]],
      photo: ['', [Validators.required]],

    });

  ngOnInit(): void {
    this.getProfil()
    this.onSubmit()
  }

  getProfil(){
    this.profilservice.getProfils()
      .subscribe(data=>{
        this.profils = data
        console.log(data);

      })
  } 

  onSubmit(){
    const formData = new FormData();
      formData.append('username', this.registerUser.get('username').value);
      formData.append('password', this.registerUser.get('password').value);
      formData.append('firstName', this.registerUser.get('firstName').value);
      formData.append('LastName', this.registerUser.get('LastName').value);
      formData.append('email', this.registerUser.get('email').value);
      formData.append('profil', this.registerUser.get('profil').value);
      formData.append('photo', this.fileToUpload);
      console.log(formData);
    this.userService.addUser(formData).subscribe(
      data=>{
      console.log(data);
         alert("successfull register")
       },
       data=>{
         console.log(data);

         alert("erreur");
       }
       )
  }
}
