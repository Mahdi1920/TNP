import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  userName:string="admin";
  password:string="admin";
  erreur="";
  constructor() { }

  verif (userN,pass)
  {
    if(userN!=this.userName)
    {
      this.erreur="user";
    }
    else if((userN=this.userName)&&(pass!=this.password))
    {
      this.erreur="password";
    }
    else if((userN=this.userName)&&(pass=this.password))
    {
      this.erreur="correct";
    }

  }

  ngOnInit() {
  }

}
