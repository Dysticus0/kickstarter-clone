import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from './user.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  users: User[] = [];
  userForm!: FormGroup;
  createNew: boolean = false;

  email : AbstractControl;
  password : AbstractControl;

  constructor(fb: FormBuilder, private router: Router) {

    this.users.push(new User('administrator@gmail.com', 'password'));
    this.users.push(new User('usuario1@gmail.com', 'qwe123'));
    this.users.push(new User('usuario2@gmail.com', 'asd123'));
    this.users.push(new User('usuario3@gmail.com', 'zxc123'));
    this.users.push(new User('usuario4@gmail.com', '123456'));

    this.userForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.email = this.userForm.controls['email'];
    this.password = this.userForm.controls['password'];
  }


  validateUser(value: User) {
    console.log(this.users);
    for (let i = 0; i < this.users.length-1; i++) {
      if (this.users[i].email === value.email && this.users[i].password === value.password) {
        this.users[i].loginUser();
        this.router.navigate(['/recommendations']);
        sessionStorage.setItem('user', this.users[i].email);
        this.userForm.reset();
      }
    }
  }

  createNewUser() {
    this.createNew = true;
  }

  addNewUser(value: User) {
    let newUser = new User(value.email, value.password);
    this.users.push(newUser);
    this.users[this.users.length-1].loginUser();

    console.log(this.users);
    this.router.navigate(['/recommendations']);
    sessionStorage.setItem('user', this.users[this.users.length-1].email);
    this.userForm.reset();
    this.createNew = false;
  }

  
  //refresh the header
}

