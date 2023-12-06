import { Component } from '@angular/core';
import { ICharacter } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrl: './characters-view.component.scss'
})
export class CharactersViewComponent {
  charsList: ICharacter[] = []

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.charList()
  }

  charList() {
    this.characterService.getAllCharacters()
      .pipe(
        map(data => data.results)
      )
      .subscribe({
        next: response => console.log(response),
        error: err => console.log(err)
      })
  }
} 
