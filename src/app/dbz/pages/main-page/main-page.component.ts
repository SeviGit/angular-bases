import { Component } from '@angular/core';
import { Charpater } from '../../interfaces/charapter.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
public characters : Charpater [] = [{
  name: 'Krillin',
  power: 1000
},{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }
];
}
