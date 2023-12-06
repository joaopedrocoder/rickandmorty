import { Component, Input } from '@angular/core';
import { ICharacter } from '../../../modules/characters/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() character?: ICharacter

  ngOnInit(): void {
    console.log(this?.character)
  }
}
