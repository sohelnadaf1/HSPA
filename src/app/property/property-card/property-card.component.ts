import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent  {

  details : any = {
    type: "2bhk",
    price: 240000,
    location : "solpaur"
  } 

}
