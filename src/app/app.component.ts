import {Component} from '@angular/core';
import {CVSHttpClient} from './cvs-http-client.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cvsHttpClient: CVSHttpClient){}

  title = 'animations-demo';
  private pokemon = 'Pokemon shows here';

  getRandomPokemon(): Observable<any> {
    const min = 0;
    const max = 250;
    const random = Math.floor(Math.random() * (+max - +min) + +min);

    return this.cvsHttpClient.get(`https://pokeapi.co/api/v2/pokemon/${random}`);
  }

  onGetPokemonSuccess(res): void { this.pokemon = res.name; }

  onGetPokemonFail(err): void { this.pokemon = 'ERR: Could not retrieve a Pokemon'; }
}
