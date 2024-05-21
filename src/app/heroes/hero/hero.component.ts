import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name : string  = 'ironMan';
public age : number  = 45;

get capitalizedName(): string{
  return this.name.toUpperCase();
}

getHeroDescription() : string {
  return `${ this.name } tiene la edad de ${ this.age }`
}

changeName() : void {
this.name = 'Spiderman';
}

changeAge() : void {
this.age = 28;
}
reset() : void {
  this.name = 'ironMan';
  this.age = 45;
}

}
