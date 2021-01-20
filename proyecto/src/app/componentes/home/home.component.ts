import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variable= "Texto de prueba"
  sumasion1= 0
  sumasion2= 0
  sumasion= this.sumasion1 + this.sumasion2
  
  letras=["a","b","c"]
  
  constructor() { }

  ngOnInit(): void {
  }

}
