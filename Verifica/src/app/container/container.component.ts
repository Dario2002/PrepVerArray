import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  cars: String[]
  constructor() {
    this.cars=['ferrari', 'Lambo','ruspa', 'camion', 'alfredo', 'Gianni', 'Betoniera', 'Fulga', 'JackSparrow','Obama' ]
  }
  ngOnInit() {
  }

}
