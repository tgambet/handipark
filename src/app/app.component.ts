import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

import {appData} from './app.data';
import {MatDialog} from '@angular/material';
import {InfoComponent} from './info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fullscreen = false;

  zoom = 13;
  zoomMax = 19;
  zoomMin = 12;
  center = L.latLng(43.706595, 7.250885);

  layer_OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: this.zoomMax,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  layer_ArcGISStreets = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}/', {
    maxZoom: this.zoomMax,
    attribution: '© ArcGIS'
  });

  layer_ArcGISSatellite = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}/', {
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
    disableClusteringAtZoom: 15,
    maxClusterRadius: 80,
    spiderfyOnMaxZoom: false
  };

  geoWatchId: number;

  userPosition: { latitude: number, longitude: number, accuracy: number };

  constructor(private dialog: MatDialog) {}

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
        L.marker([object.geometry.coordinates[1], object.geometry.coordinates[0]], {icon: icon})
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
    this._updateLayers();
  }

  popupInfo() {
    this.dialog.open(InfoComponent, {
      data: {
        aires: appData.length,
        total: appData.reduce((p, c) => p + c.NB_PLACE, 0)
      }
    });
  }

  isGeoLocalized() {
    return this.geoWatchId && this.userPosition;
  }

  isGeoLocalizing() {
    return this.geoWatchId && !this.userPosition;
  }

  toggleGeoLocation() {
    if ('geolocation' in navigator) {
      if (this.isGeoLocalizing()) {
        return;
      } else if (this.isGeoLocalized()) {
        navigator.geolocation.clearWatch(this.geoWatchId);
        this.geoWatchId = null;
        this.userPosition = null;
        this._updateLayers();
      } else {
        this.geoWatchId = navigator.geolocation.watchPosition(
          (position) => {
            // The first time center map on user position
            if (!this.userPosition) {
              this.center = L.latLng(position.coords.latitude, position.coords.longitude);
            }
            this.userPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy
            };
            this._updateLayers();
          },
          (error) => {
            // this.error = error.message
            navigator.geolocation.clearWatch(this.geoWatchId);
            this.geoWatchId = null;
          },
          {
            enableHighAccuracy: true,
            maximumAge: 120000,
            timeout: 30000
          }
        );
      }
    } else {
      // this.error = "Geolocalisation non disponible"
    }
  }

  _updateLayers() {
    if (this.userPosition) {
      this.layers = [
        this.currentLayer,
        L.circle(L.latLng(this.userPosition.latitude, this.userPosition.longitude), {radius: this.userPosition.accuracy / 2, color: 'red'})
      ];
    } else {
      this.layers = [this.currentLayer];
    }
  }

}
