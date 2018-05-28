import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private key:string = "?api_key=AAAAAAAAAAAAAAAAAAAAAAA"; //Adicionar a key do site https://www.themoviedb.org
  private httpAccess:string = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  // consulta ultimos filmes
  getPopularMovies() {
    return this.http.get(this.httpAccess + "/movie/popular" + this.key);
  }

}
