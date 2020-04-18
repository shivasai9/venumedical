import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginHelper } from '../loginHelper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router: Router, private loginService: LoginHelper) { }

  ngOnInit(): void {
    this.loginService.logout();
  }
  onSubmit() {
    if ((this.loginForm.controls.userName.value).toLowerCase() === 'venu' &&
      (this.loginForm.controls.userName.value).toLowerCase() === 'venu') {
      this.loginService.login();
      this.router.navigate(['/home']);
    } else {

      alert('username or password is incorrect');
    }
  }
}
