import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pwdHide = true;
  user = null;
  email = "";
  password = "";
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  signIn(email : String, password : String) {
    this.dataService.signIn(email, password).subscribe((data: any[])=>{
      console.log(data);
    })
  }


}
