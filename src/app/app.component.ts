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

  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
  };

  layersControlOptions = { position: 'bottomleft' };

  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer
  };

  options = {
    zoom: 13,
    center: L.latLng(43.7035944, 7.2495124)
  };

  markerClusterData: any[] = [];
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterOptions: L.MarkerClusterGroupOptions;

  ngOnInit(): void {

    const tmp = [];

    const icon = L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    });

    appData.features.forEach(object => {

      const places = object.properties.NB_PLACE;
      const voie = object.properties.NOM_VOIE;
      const compl = object.properties.COMPLEMENT;

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

  markerClusterReady(group: L.MarkerClusterGroup) {

    this.markerClusterGroup = group;

  }

}
