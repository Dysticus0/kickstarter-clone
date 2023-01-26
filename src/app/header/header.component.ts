import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userLogged : boolean = false;
  user = sessionStorage.getItem('user');
  userMenuVal : boolean = false;

  constructor(){
    if(this.user){
      this.userLogged = true;
    }
  }

  logOut(){
    sessionStorage.removeItem("user");
    this.userLogged = false;
    this.userMenuVal = false;
  }

  userMenu(){
     (this.userMenuVal) ? this.userMenuVal = false: this.userMenuVal = true;
  }

}
