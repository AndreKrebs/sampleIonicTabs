import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  private loader;
  private refresher;
  private isRefresh = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefresh = true;
    this.getDataFilms();

  }

  ionViewDidEnter() {
    this.getDataFilms();  
  }

  getDataFilms() {
    this.initLoading();
    this.movieProvider.getPopularMovies().subscribe(
      data=>{
        const response = (data as any);
        this.listaFilmes = response.results;

        this.endLoading();
      }, error=>{
        console.log('ERROR:', error);
        this.endLoading();
      }
    );
  }

  initLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  endLoading() {
    // valida se é refresh
    if(this.isRefresh==true) {
      this.refresher.complete();
      this.isRefresh = false;
    }

    this.loader.dismiss();
  }

}
