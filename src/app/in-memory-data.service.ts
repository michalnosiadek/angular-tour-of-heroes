import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Mr. Disguise' },
      { id: 14, name: 'Memory-Man' },
      { id: 15, name: 'Shield of Honor' },
      { id: 16, name: 'Neverending Story Teller' },
      { id: 17, name: 'Handsome Jack' },
      { id: 18, name: 'Swifty' },
      { id: 19, name: 'Gorgon' },
      { id: 20, name: 'Stereotype Buster' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the mothod beloew returns the initial number (11).
  // If the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
