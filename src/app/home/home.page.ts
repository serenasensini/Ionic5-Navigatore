import { Component } from '@angular/core';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  restaurants = [
    {
      lat: 12.478737,
      lon: 41.847545,
      address: 'Via Laurentina, 15, 00142 Roma RM',
      name: 'Zumi Sushi Restaurant'
    },
    {
      lat: 12.4366479,
      lon: 41.9713835,
      address: 'Via di Grottarossa, 52, 00189 Roma RM',
      name: 'Kabab Iranian Restaurant'
    },
    {
      lat: 12.4595611,
      lon: 41.8287609,
      address: 'Viale Oceania, 90, 00144 Roma RM',
      name: 'Giolitti Eur'
    }
  ];

  constructor(private launchNavigator: LaunchNavigator) {}

  goTo(res) {
    const lat = res.lat;
    const lon = res.lon;
    this.launchNavigator
        .navigate([lon, lat], { start: 'Milano, IT'})
        .then(
            success => console.log('Avviato navigatore!'),
            error => console.log('Errore: ', error)
        );
  }
}
