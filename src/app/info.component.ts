import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-info',
  template: `
    <div class="mat-typography">
      <h2 mat-dialog-title>Informations</h2>
      <mat-dialog-content>
        <p>
          Il y a <b>{{data.aires}}</b> aires de stationnement pour les personnes à mobilité réduite à Nice,
          pour un total de <b>{{data.total}}</b> places.
        </p>
        <p>
          <a href="
http://opendata.nicecotedazur.org/data/dataset/cartographie-des-aires-de-stationnement-pour-les-personnes-a-mobilite-reduite-nice">
            Données fournies par la Métropole Nice Côte d'Azur.</a>
          Dernière modification le 16 Juillet 2014.
        </p>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-button cdkFocusInitial mat-dialog-close>Ok</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
  `]
})
export class InfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
