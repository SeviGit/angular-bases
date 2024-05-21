import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroDelete?: string;
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hul', 'Thor']

  removeLastHero(): void {
    this.heroDelete = this.heroNames.pop();
  }
}
