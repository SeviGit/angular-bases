import { Component, Input } from '@angular/core';
import { Charpater } from '../../interfaces/charapter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
public charapterList : Charpater[] = [
  {
    name: 'Trunk',
    power: 10
  }
]

}

