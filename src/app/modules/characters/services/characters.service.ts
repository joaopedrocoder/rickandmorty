import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IData } from '../../../shared/models/data.model';
import { ICharacter } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url = environment.baseUrl

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<IData<ICharacter>> {
    return this.http.get<IData<ICharacter>>(`${this.url}/character`)
  } 

  getCharacterById(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${this.url}/character/${id}`)
  }
}
