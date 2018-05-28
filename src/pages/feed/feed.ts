import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public nomeUsuario:string = "Marty McFly";

  public listaFilmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data=>{
        // por ser um objeto informo que data é do tipo any e faço um parse do json
        const response = (data as any);
        this.listaFilmes = response.results;

        console.log('DATA:', this.listaFilmes);
      }, error=>{
        console.log('ERROR:', error);
      }
    );
  }

}
