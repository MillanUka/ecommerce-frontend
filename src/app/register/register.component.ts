import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: String;
  password : String;
  cPassword : String;
  pwdHide: Boolean = true;
  cPwdHide: Boolean = true;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  register(email: String, password: String, cPassword : String) {
    if (password !== cPassword) {
      alert('Passwords do not match');
    } else {
      this.dataService.register(email, password).subscribe((data: any[]) => {
        alert('Registration was successful!');
      });
    }
  }
}
