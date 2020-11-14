import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pwdHide = true;
  email = "";
  password = "";
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  signIn(email : String, password : String) {
    this.dataService.signIn(email, password).subscribe((data: any[])=>{
      this.user = data;
      this.dataService.isAuth = true;
      alert("Login was successful!");
    })
  }

  set user(user: any[]) {
    this.dataService.currentUser = user;
  }

}
