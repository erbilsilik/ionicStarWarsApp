import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) { }

  getFilms() {
    return this.http.get('https://swapi.co/api/films');
  }

  getPeople() {
    return this.http.get('https://swapi.co/api/people');
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets');
  }
}
