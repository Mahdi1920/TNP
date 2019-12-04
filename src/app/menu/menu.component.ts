import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
date:Date=new Date();



  constructor() { }
  
  
  ngOnInit() {
  
/*
  this.date.setMinutes((this.date.getMinutes())+1);
  this.date.setSeconds((this.date.getSeconds())+1);
  */

  }

}
