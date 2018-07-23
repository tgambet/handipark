import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

import {appData} from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  zoom = 13;
  zoomMax = 19;
  zoomMin = 12;
  center = L.latLng(43.706595, 7.250885);

  layersControlOptions = { position: 'bottomleft' };

  baseLayers = {
    'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: this.zoomMax,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
  };

  options = {
    zoomControl: false,
    minZoom: this.zoomMin,
    maxZoom: this.zoomMax
  };

  markerClusterData: any[] = [];

  ngOnInit(): void {

    const tmp = [];

    const icon = L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    });

    appData.forEach(object => {

      const places = object.NB_PLACE;
      const voie = object.NOM_VOIE;
      const compl = object.COMPLEMENT;

      const popup = `<span>Nombre de places : <b>${places}</b></span>`
        + `<br><span>Nom de voie : <b>${voie}</b></span>`
        + (compl ? `<br><span>Complément : <b>${compl}</b></span>` : '');

      tmp.push(
        L.marker([object.geometry.coordinates[1], object.geometry.coordinates[0]], {icon})
          .bindPopup(popup)
      );

    });

    this.markerClusterData = tmp;

  }

  zoomIn(): void {
    this.zoom = this.zoom >= this.zoomMax ? this.zoomMax : this.zoom + 1;
  }

  zoomOut(): void {
    this.zoom = this.zoom <= this.zoomMin ? this.zoomMin : this.zoom - 1;
  }

}
