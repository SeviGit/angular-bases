import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  // public onDeleteCharacter: EventEmitter<number> = new EventEmitter();
  public onDeleteCharacter = new EventEmitter<string>();

  @Input()
  public charapterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

  deleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteCharacter.emit(id);
  }

}

