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

  layer_OpenStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: this.zoomMax,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  layer_ArcGISStreets = L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}/', {
    maxZoom: this.zoomMax,
    attribution: '© ArcGIS'
  });

  layer_ArcGISSatellite = L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}/', {
    maxZoom: this.zoomMax,
    attribution: '© ArcGIS'
  });

  currentLayer = this.layer_OpenStreetMap;

  layers: L.Layer[] = [this.currentLayer];

  options = {
    zoomControl: false,
    minZoom: this.zoomMin,
    maxZoom: this.zoomMax
  };

  markerClusterData: any[] = [];

  markerClusterOptions: L.MarkerClusterGroupOptions = {
    animate: true,
    disableClusteringAtZoom: 16,
    maxClusterRadius: 80,
    spiderfyOnMaxZoom: false
  };

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

  nextLayer(): void {
    switch (this.currentLayer) {
      case this.layer_OpenStreetMap: {
        this.currentLayer = this.layer_ArcGISSatellite;
        break;
      }
      case this.layer_ArcGISSatellite: {
        this.currentLayer = this.layer_ArcGISStreets;
        break;
      }
      case this.layer_ArcGISStreets: {
        this.currentLayer = this.layer_OpenStreetMap;
        break;
      }
    }
    this.layers = [this.currentLayer];
  }

}
