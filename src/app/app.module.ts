import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import {AppComponent} from './app.component';
import {LeafletMarkerClusterModule} from '@asymmetrik/ngx-leaflet-markercluster';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {InfoComponent} from './info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  entryComponents: [
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule.forRoot(),
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
