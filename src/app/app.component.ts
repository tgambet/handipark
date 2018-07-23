import {Component} from '@angular/core';
import {latLng, tileLayer, Map, geoJSON, marker, icon} from 'leaflet';
import {GeoJsonObject} from 'geojson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 })
    ],
    zoom: 13,
    center: latLng(43.7035944, 7.2495124)
  };

  // http://opendata.nicecotedazur.org/data/dataset/cartographie-des-aires-de-stationnement-pour-les-personnes-a-mobilite-reduite-nice
  data = {
    'type': 'FeatureCollection',
    'features': [
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25831565,
            43.69636907
          ]
        },
        'type': 'Feature',
        'id': 1,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 261,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DE LA BUFFA',
          'IDVOIE_NCA': '06088AB1067',
          'NUM': 57,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26791682,
            43.70237063
          ]
        },
        'type': 'Feature',
        'id': 2,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 538,
          'NOM_VOIE': 'RUE BISCARRA',
          'IDVOIE_NCA': '06088AB0638',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28258921,
            43.71154451
          ]
        },
        'type': 'Feature',
        'id': 3,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 588,
          'NOM_VOIE': 'RUE NATHALIE MASSE',
          'IDVOIE_NCA': '06088AM1444',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2857834,
            43.72342449
          ]
        },
        'type': 'Feature',
        'id': 4,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 662,
          'NOM_VOIE': 'RUE JEAN-FRAN\u00c7OIS FULCONIS',
          'IDVOIE_NCA': '06088AF0780',
          'NUM': 5,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28547725,
            43.704542
          ]
        },
        'type': 'Feature',
        'id': 5,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 8,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE BARBERIS',
          'IDVOIE_NCA': '06088AB0110',
          'NUM': 29,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22640812,
            43.68668083
          ]
        },
        'type': 'Feature',
        'id': 6,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 17,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD NAPOLEON III',
          'IDVOIE_NCA': '06088AO0198',
          'NUM': 68,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26588353,
            43.70298409
          ]
        },
        'type': 'Feature',
        'id': 7,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 23,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE D\'ITALIE',
          'IDVOIE_NCA': '06088AI0088',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2582773,
            43.70754917
          ]
        },
        'type': 'Feature',
        'id': 8,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 35,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE TORRINI',
          'IDVOIE_NCA': '06088AT0286',
          'NUM': 8,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25013613,
            43.72371907
          ]
        },
        'type': 'Feature',
        'id': 9,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 37,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE CESSOLE',
          'IDVOIE_NCA': '06088AC0660',
          'NUM': 156,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25697835,
            43.70767913
          ]
        },
        'type': 'Feature',
        'id': 10,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 38,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE DABRAY',
          'IDVOIE_NCA': '06088AD0022',
          'NUM': 42,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28113597,
            43.69962862
          ]
        },
        'type': 'Feature',
        'id': 11,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 48,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE CATHERINE SEGURANE',
          'IDVOIE_NCA': '06088AC0539',
          'NUM': 10,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22916696,
            43.67877366
          ]
        },
        'type': 'Feature',
        'id': 12,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 55,
          'NOM_VOIE': 'AVENUE DE LA CALIFORNIE',
          'IDVOIE_NCA': '06088AC0099',
          'NUM': 258,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27337845,
            43.69825131
          ]
        },
        'type': 'Feature',
        'id': 13,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 61,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE FELIX FAURE',
          'IDVOIE_NCA': '06088AF0143',
          'NUM': 10,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28790224,
            43.70300466
          ]
        },
        'type': 'Feature',
        'id': 14,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 63,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE BEAUMONT',
          'IDVOIE_NCA': '06088AB0391',
          'NUM': 54,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25760917,
            43.71846966
          ]
        },
        'type': 'Feature',
        'id': 15,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 69,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE PAUL BOUNIN',
          'IDVOIE_NCA': '06088AP0517',
          'NUM': 36,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24670192,
            43.70102447
          ]
        },
        'type': 'Feature',
        'id': 16,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 74,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE HONORE D\'ESTIENNE D\'ORVES',
          'IDVOIE_NCA': '06088AE0407',
          'NUM': 62,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25792332,
            43.70046827
          ]
        },
        'type': 'Feature',
        'id': 17,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 75,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE GUIGLIA',
          'IDVOIE_NCA': '06088AG0968',
          'NUM': 18,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25630064,
            43.71666235
          ]
        },
        'type': 'Feature',
        'id': 18,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 110,
          'COMPLEMENT': 'Dans le parc-autos existant au droit du bureau de poste Saint-Barth\u00e9l\u00e9my',
          'NOM_VOIE': 'AVENUE CYRILLE BESSET',
          'IDVOIE_NCA': '06088AC2002',
          'NUM': 48,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25241618,
            43.69928989
          ]
        },
        'type': 'Feature',
        'id': 19,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 125,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE CAFFARELLI',
          'IDVOIE_NCA': '06088AC0022',
          'NUM': 34,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2822993,
            43.7201096
          ]
        },
        'type': 'Feature',
        'id': 20,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 135,
          'COMPLEMENT': 'Au droit de la poste',
          'NOM_VOIE': 'RUE JOSEPH GAZAN',
          'IDVOIE_NCA': '06088AG0288',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26400343,
            43.70961058
          ]
        },
        'type': 'Feature',
        'id': 21,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 175,
          'COMPLEMENT': 'Sur le parking au droit de la poste',
          'NOM_VOIE': 'RUE GENERAL HOCHE',
          'IDVOIE_NCA': '06088AH0202',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24796882,
            43.70023439
          ]
        },
        'type': 'Feature',
        'id': 22,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 206,
          'NOM_VOIE': 'PLACE MAX AMOUROUX',
          'IDVOIE_NCA': '06088SA0452',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26265644,
            43.7202345
          ]
        },
        'type': 'Feature',
        'id': 23,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 212,
          'COMPLEMENT': 'Parc-autos au Sud',
          'NOM_VOIE': 'PLACE ALEXANDRE MEDECIN',
          'IDVOIE_NCA': '06088SA0242',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23649811,
            43.71747523
          ]
        },
        'type': 'Feature',
        'id': 24,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 226,
          'COMPLEMENT': 'Sur la contre-all\u00e9e de la place, \u00e0 10 m\u00e8tres de son d\u00e9bouch\u00e9 sur la corniche de Magnan',
          'NOM_VOIE': 'PLACE DE SAINT-PIERRE DE FERIC',
          'IDVOIE_NCA': '06088BA0885',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27151965,
            43.72582212
          ]
        },
        'type': 'Feature',
        'id': 25,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 231,
          'COMPLEMENT': 'Devant l\'entr\u00e9e du CNR',
          'NOM_VOIE': 'RUE THYDE MONNIER',
          'IDVOIE_NCA': '06088AM1185',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27587774,
            43.7009075
          ]
        },
        'type': 'Feature',
        'id': 26,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 232,
          'COMPLEMENT': 'Sur le parking \u00e0 l\'angle de la rue Gioffr\u00e9do',
          'NOM_VOIE': 'RUE TONDUTI DE L\'ESCARENE',
          'IDVOIE_NCA': '06088AT0242',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2642268,
            43.71576349
          ]
        },
        'type': 'Feature',
        'id': 27,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 239,
          'COMPLEMENT': 'Face \u00e0 la Facult\u00e9 des Sciences',
          'NOM_VOIE': 'AVENUE JOSEPH VALLOT',
          'IDVOIE_NCA': '06088AJ0473',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22168239,
            43.67056774
          ]
        },
        'type': 'Feature',
        'id': 28,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 242,
          'COMPLEMENT': 'A hauteur du n\u00b0 68 angle rue Dunoyer de S\u00e9gonzac',
          'NOM_VOIE': 'BOULEVARD RENE CASSIN',
          'IDVOIE_NCA': '06088AM0594',
          'NUM': 66,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23398134,
            43.68335331
          ]
        },
        'type': 'Feature',
        'id': 29,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 246,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 235,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20820078,
            43.67088107
          ]
        },
        'type': 'Feature',
        'id': 30,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 263,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 55,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22274301,
            43.67446366
          ]
        },
        'type': 'Feature',
        'id': 31,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 652,
          'NOM_VOIE': 'PARC AUTOS DE L\'AVENUE SAINT-AUGUSTIN',
          'IDVOIE_NCA': '06088BA1385',
          'NUM': 79,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26004974,
            43.71907458
          ]
        },
        'type': 'Feature',
        'id': 32,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 655,
          'NOM_VOIE': 'RUE PAUL BOUNIN',
          'IDVOIE_NCA': '06088AP0517',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26616309,
            43.69584339
          ]
        },
        'type': 'Feature',
        'id': 33,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 656,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE GUSTAVE V',
          'IDVOIE_NCA': '06088AG1111',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21669955,
            43.70728679
          ]
        },
        'type': 'Feature',
        'id': 34,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 660,
          'COMPLEMENT': 'Sur la placette',
          'NOM_VOIE': 'PLACETTE ABBE MERLIN',
          'IDVOIE_NCA': '06088BA1540',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26827867,
            43.70402946
          ]
        },
        'type': 'Feature',
        'id': 35,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 33,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE NOTRE-DAME',
          'IDVOIE_NCA': '06088AN0110',
          'NUM': 17,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2563331,
            43.72294716
          ]
        },
        'type': 'Feature',
        'id': 36,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 40,
          'COMPLEMENT': 'Sur le c\u00f4t\u00e9 du parc-autos de surface',
          'NOM_VOIE': 'BOULEVARD GORBELLA',
          'IDVOIE_NCA': '06088AG0693',
          'NUM': 54,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24513669,
            43.69171937
          ]
        },
        'type': 'Feature',
        'id': 37,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 41,
          'COMPLEMENT': 'Contre all\u00e9e face au n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25840192,
            43.70704673
          ]
        },
        'type': 'Feature',
        'id': 38,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 45,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE VERNIER',
          'IDVOIE_NCA': '06088AV0286',
          'NUM': 34,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27300182,
            43.69919805
          ]
        },
        'type': 'Feature',
        'id': 39,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 50,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE GIOFFREDO',
          'IDVOIE_NCA': '06088AG0616',
          'NUM': 48,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28421884,
            43.70148592
          ]
        },
        'type': 'Feature',
        'id': 40,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 52,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE BARLA',
          'IDVOIE_NCA': '06088AB0209',
          'NUM': 29,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25841136,
            43.71782209
          ]
        },
        'type': 'Feature',
        'id': 41,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 56,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE DES BOERS',
          'IDVOIE_NCA': '06088AB0715',
          'NUM': 16,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.290092,
            43.70407831
          ]
        },
        'type': 'Feature',
        'id': 42,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 71,
          'COMPLEMENT': 'Au hauteur du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE RIQUIER',
          'IDVOIE_NCA': '06088AR0374',
          'NUM': 31,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28647927,
            43.69882327
          ]
        },
        'type': 'Feature',
        'id': 43,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 80,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE ARSON',
          'IDVOIE_NCA': '06088AA0957',
          'NUM': 4,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29751149,
            43.73569344
          ]
        },
        'type': 'Feature',
        'id': 44,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 93,
          'COMPLEMENT': 'Angle rue Guiglionda de Sainte-Agathe',
          'NOM_VOIE': 'RUE AMEDEE VII',
          'IDVOIE_NCA': '06088AA0412',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26233035,
            43.69977938
          ]
        },
        'type': 'Feature',
        'id': 45,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 99,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'AVENUE BAQUIS',
          'IDVOIE_NCA': '06088AB0088',
          'NUM': 8,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28693458,
            43.69661097
          ]
        },
        'type': 'Feature',
        'id': 46,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 101,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD STALINGRAD',
          'IDVOIE_NCA': '06088AS1364',
          'NUM': 37,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25763674,
            43.7019546
          ]
        },
        'type': 'Feature',
        'id': 47,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 107,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE AMIRAL DE GRASSE',
          'IDVOIE_NCA': '06088AA0418',
          'NUM': 22,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26595733,
            43.70610621
          ]
        },
        'type': 'Feature',
        'id': 48,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 114,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD RAIMBALDI',
          'IDVOIE_NCA': '06088AR0033',
          'NUM': 29,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26828275,
            43.7083211
          ]
        },
        'type': 'Feature',
        'id': 49,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 130,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'AVENUE DE L\'OLIVETTO',
          'IDVOIE_NCA': '06088AO0044',
          'NUM': 12,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28647129,
            43.70266471
          ]
        },
        'type': 'Feature',
        'id': 50,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 131,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DE ORESTIS',
          'IDVOIE_NCA': '06088AO0154',
          'NUM': 6,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23042732,
            43.68160376
          ]
        },
        'type': 'Feature',
        'id': 51,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 136,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE RAYMOND FERAUD',
          'IDVOIE_NCA': '06088AR0121',
          'NUM': 5,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27910729,
            43.71248093
          ]
        },
        'type': 'Feature',
        'id': 52,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 140,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'BOULEVARD PASTEUR',
          'IDVOIE_NCA': '06088AP0440',
          'NUM': 125,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25761761,
            43.7229275
          ]
        },
        'type': 'Feature',
        'id': 53,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 165,
          'COMPLEMENT': 'Sur le parc-autos Gorbella 2 (Lou Ray)',
          'NOM_VOIE': 'BOULEVARD GORBELLA',
          'IDVOIE_NCA': '06088AG0693',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 7
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25130005,
            43.69380371
          ]
        },
        'type': 'Feature',
        'id': 54,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 178,
          'COMPLEMENT': 'Entre boulevard Fran\u00e7ois Grosso et rue Auguste Renoir',
          'NOM_VOIE': 'RUE DE FRANCE',
          'IDVOIE_NCA': '06088AF0550',
          'NUM': 118,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26058972,
            43.70058294
          ]
        },
        'type': 'Feature',
        'id': 55,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 188,
          'COMPLEMENT': 'Angle rue Rossini',
          'NOM_VOIE': 'RUE GOUNOD',
          'IDVOIE_NCA': '06088AG0726',
          'NUM': 20,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27613744,
            43.72065669
          ]
        },
        'type': 'Feature',
        'id': 56,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 199,
          'COMPLEMENT': 'Face au n\u00b0, \u00e0 hauteur du jardin',
          'NOM_VOIE': 'AVENUE DU MONASTERE',
          'IDVOIE_NCA': '06088AM1166',
          'NUM': 16,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25046882,
            43.71022398
          ]
        },
        'type': 'Feature',
        'id': 57,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 200,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE DE PESSICART',
          'IDVOIE_NCA': '06088AP0704',
          'NUM': 46,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26670831,
            43.70921736
          ]
        },
        'type': 'Feature',
        'id': 58,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 214,
          'COMPLEMENT': 'Sur le parc-autos hors ligne, angle avenue Comboul',
          'NOM_VOIE': 'AVENUE MIRABEAU',
          'IDVOIE_NCA': '06088AM1023',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26489473,
            43.70312911
          ]
        },
        'type': 'Feature',
        'id': 59,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 228,
          'COMPLEMENT': 'Sur le parking \u00e0 l\'angle de la rue d\'Angleterre',
          'NOM_VOIE': 'RUE DE LA SUISSE',
          'IDVOIE_NCA': '06088AS1386',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21606743,
            43.74597513
          ]
        },
        'type': 'Feature',
        'id': 60,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 233,
          'NOM_VOIE': 'PLACE DES VIGNERONS DE BELLET',
          'IDVOIE_NCA': '06088SR0069',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19593167,
            43.71094745
          ]
        },
        'type': 'Feature',
        'id': 61,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 238,
          'COMPLEMENT': 'c\u00f4t\u00e9 Nord, au droit du n\u00b08',
          'NOM_VOIE': 'AVENUE AUGUSTE VEROLA',
          'IDVOIE_NCA': '06088AS0333',
          'NUM': 8,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23386498,
            43.68402899
          ]
        },
        'type': 'Feature',
        'id': 62,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 243,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE DE LA CALIFORNIE',
          'IDVOIE_NCA': '06088AC0099',
          'NUM': 158,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26191321,
            43.70732904
          ]
        },
        'type': 'Feature',
        'id': 63,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 254,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE VERNIER',
          'IDVOIE_NCA': '06088AV0286',
          'NUM': 8,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29105067,
            43.71521262
          ]
        },
        'type': 'Feature',
        'id': 64,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 258,
          'COMPLEMENT': 'C\u00f4t\u00e9 Est, face au n\u00b0',
          'NOM_VOIE': 'RUE FORNERO MENEI',
          'IDVOIE_NCA': '06088AF0495',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26314132,
            43.7037927
          ]
        },
        'type': 'Feature',
        'id': 65,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 259,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE D\'ALSACE LORRAINE',
          'IDVOIE_NCA': '06088AA0385',
          'NUM': 21,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23730071,
            43.69463967
          ]
        },
        'type': 'Feature',
        'id': 66,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 649,
          'COMPLEMENT': 'Dans le parking du Jardin Fernand Moretti',
          'NOM_VOIE': 'AVENUE DE LA BORNALA',
          'IDVOIE_NCA': '06088AB0858',
          'NUM': 36,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25443093,
            43.71797106
          ]
        },
        'type': 'Feature',
        'id': 67,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 1,
          'COMPLEMENT': 'Sur le parc autos de l\'avenue',
          'NOM_VOIE': 'AVENUE CYRILLE BESSET',
          'IDVOIE_NCA': '06088AC2002',
          'NUM': 64,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29304672,
            43.72226513
          ]
        },
        'type': 'Feature',
        'id': 68,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 22,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'BOULEVARD LOUIS BRAILLE',
          'IDVOIE_NCA': '06088AL0484',
          'NUM': 53,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25976563,
            43.70055025
          ]
        },
        'type': 'Feature',
        'id': 69,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 25,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE ROSSINI',
          'IDVOIE_NCA': '06088AR0649',
          'NUM': 47,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28510777,
            43.69916164
          ]
        },
        'type': 'Feature',
        'id': 70,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 30,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE FODERE',
          'IDVOIE_NCA': '06088AF0341',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28675757,
            43.7073919
          ]
        },
        'type': 'Feature',
        'id': 71,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 34,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'CHEMIN SORGENTINO',
          'IDVOIE_NCA': '06088AS1287',
          'NUM': 4,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22760789,
            43.67843025
          ]
        },
        'type': 'Feature',
        'id': 72,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 42,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE SAINT-AUGUSTIN',
          'IDVOIE_NCA': '06088AS0121',
          'NUM': 31,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29206542,
            43.7068959
          ]
        },
        'type': 'Feature',
        'id': 73,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 51,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE L\'ARMEE DES ALPES',
          'IDVOIE_NCA': '06088AA0913',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26299275,
            43.70684572
          ]
        },
        'type': 'Feature',
        'id': 74,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 54,
          'COMPLEMENT': 'Au niveau du n\u00b0',
          'NOM_VOIE': 'RUE DE DIJON',
          'IDVOIE_NCA': '06088AD0297',
          'NUM': 6,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26175291,
            43.70275838
          ]
        },
        'type': 'Feature',
        'id': 75,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 57,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE AUBER',
          'IDVOIE_NCA': '06088AA1067',
          'NUM': 28,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28388745,
            43.70635437
          ]
        },
        'type': 'Feature',
        'id': 76,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 78,
          'COMPLEMENT': 'Au niveau du n\u00b0',
          'NOM_VOIE': 'RUE MARALDI',
          'IDVOIE_NCA': '06088AM0341',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24880682,
            43.71108539
          ]
        },
        'type': 'Feature',
        'id': 77,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 83,
          'COMPLEMENT': 'Au droit des num\u00e9ros',
          'NOM_VOIE': 'AVENUE DE PESSICART',
          'IDVOIE_NCA': '06088AP0704',
          'NUM': 71,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28692648,
            43.69722689
          ]
        },
        'type': 'Feature',
        'id': 78,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 87,
          'NOM_VOIE': 'BOULEVARD STALINGRAD',
          'IDVOIE_NCA': '06088AS1364',
          'NUM': 32,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27040257,
            43.70914955
          ]
        },
        'type': 'Feature',
        'id': 79,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 91,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE CIMIEZ',
          'IDVOIE_NCA': '06088AC1089',
          'NUM': 25,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25471575,
            43.7043208
          ]
        },
        'type': 'Feature',
        'id': 80,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 100,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'AVENUE GAY',
          'IDVOIE_NCA': '06088AG0286',
          'NUM': 8,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28884564,
            43.71338338
          ]
        },
        'type': 'Feature',
        'id': 81,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 123,
          'COMPLEMENT': 'Au droit du parc autos hors ligne, \u00e0 hauteur de la rue de la Gendarmerie',
          'NOM_VOIE': 'RUE DE ROQUEBILLIERE',
          'IDVOIE_NCA': '06088AR0561',
          'NUM': 22,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26597965,
            43.72769389
          ]
        },
        'type': 'Feature',
        'id': 82,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 129,
          'COMPLEMENT': 'Au droit du n\u00b0 106 sur le parking commercial',
          'NOM_VOIE': 'AVENUE HENRY DUNANT',
          'IDVOIE_NCA': '06088AH0176',
          'NUM': 106,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28627761,
            43.70256324
          ]
        },
        'type': 'Feature',
        'id': 83,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 138,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DE ORESTIS',
          'IDVOIE_NCA': '06088AO0154',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29188668,
            43.70385679
          ]
        },
        'type': 'Feature',
        'id': 84,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 151,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DOCTEUR PIERRE RICHELMI',
          'IDVOIE_NCA': '06088AD0473',
          'NUM': 48,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25957203,
            43.71307779
          ]
        },
        'type': 'Feature',
        'id': 85,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 153,
          'COMPLEMENT': 'Dans la contre-all\u00e9e de la rue \u00e0 hauteur du n\u00b0',
          'NOM_VOIE': 'RUE THEODORE DE BANVILLE',
          'IDVOIE_NCA': '06088AT0154',
          'NUM': 36,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27530622,
            43.7254034
          ]
        },
        'type': 'Feature',
        'id': 86,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 167,
          'COMPLEMENT': 'Sur le parc-autos, au d\u00e9bouch\u00e9 place Commandant G\u00e9r\u00f4me',
          'NOM_VOIE': 'AVENUE CAP DE CROIX',
          'IDVOIE_NCA': '06088AC0209',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.256499,
            43.72586094
          ]
        },
        'type': 'Feature',
        'id': 87,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 168,
          'COMPLEMENT': 'Sur le C\u00f4t\u00e9 EST, face \u00e0 la voie Nord de cette m\u00eame place',
          'NOM_VOIE': 'PLACE FONTAINE DU TEMPLE',
          'IDVOIE_NCA': '06088SF0385',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2335185,
            43.70455623
          ]
        },
        'type': 'Feature',
        'id': 88,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 173,
          'COMPLEMENT': 'Sur le parc-autos, \u00e0 hauteur du 232 bd de la Madeleine',
          'NOM_VOIE': 'ESPACE JOSEPH MANZONE',
          'IDVOIE_NCA': '06088SM0057',
          'NUM': 236,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25226027,
            43.69392578
          ]
        },
        'type': 'Feature',
        'id': 89,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 179,
          'NOM_VOIE': 'RUE DE FRANCE',
          'IDVOIE_NCA': '06088AF0550',
          'NUM': 121,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2463958,
            43.69202351
          ]
        },
        'type': 'Feature',
        'id': 90,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 180,
          'COMPLEMENT': 'A droit du n\u00b0',
          'NOM_VOIE': 'RUE DE FRANCE',
          'IDVOIE_NCA': '06088AF0550',
          'NUM': 176,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25546977,
            43.69860685
          ]
        },
        'type': 'Feature',
        'id': 91,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 198,
          'COMPLEMENT': 'Angle Nord-Ouest',
          'NOM_VOIE': 'SQUARE DOCTEUR ZAMENHOF',
          'IDVOIE_NCA': '06088SZ0100',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2190776,
            43.67708728
          ]
        },
        'type': 'Feature',
        'id': 92,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 227,
          'COMPLEMENT': 'Sur le c\u00f4t\u00e9 Sud du parc-autos, place Flo Bravi',
          'NOM_VOIE': 'BOULEVARD DU SOUVENIR FRAN\u00c7AIS',
          'IDVOIE_NCA': '06088AS1336',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.30712545,
            43.74018691
          ]
        },
        'type': 'Feature',
        'id': 93,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 244,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE GENERAL SARAMITO',
          'IDVOIE_NCA': '06088AG0412',
          'NUM': 25,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2433538,
            43.69066732
          ]
        },
        'type': 'Feature',
        'id': 94,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 245,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE DE LA CALIFORNIE',
          'IDVOIE_NCA': '06088AC0099',
          'NUM': 17,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27317125,
            43.70377142
          ]
        },
        'type': 'Feature',
        'id': 95,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 247,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'BOULEVARD DUBOUCHAGE',
          'IDVOIE_NCA': '06088AD0616',
          'NUM': 6,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28148651,
            43.71210501
          ]
        },
        'type': 'Feature',
        'id': 96,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 257,
          'COMPLEMENT': 'Dans le parking situ\u00e9 \u00e0 hauteur du n\u00b0',
          'NOM_VOIE': 'RUE DE LA CITE DE L\'EAU FRAICHE',
          'IDVOIE_NCA': '06088AE0016',
          'NUM': 10,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21937318,
            43.6708025
          ]
        },
        'type': 'Feature',
        'id': 97,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 590,
          'NOM_VOIE': 'RUE DOMINIQUE PAEZ',
          'IDVOIE_NCA': '06088AD0550',
          'NUM': 12,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20740581,
            43.67511911
          ]
        },
        'type': 'Feature',
        'id': 98,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 654,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD PAUL MONTEL',
          'IDVOIE_NCA': '06088AM1474',
          'NUM': 60,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25758222,
            43.7226455
          ]
        },
        'type': 'Feature',
        'id': 99,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 661,
          'COMPLEMENT': 'Dans le parc-autos situ\u00e9 au n\u00b0 3',
          'NOM_VOIE': 'RUE GEORGES BIDAULT',
          'IDVOIE_NCA': '06088AB0610',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2847576,
            43.71279663
          ]
        },
        'type': 'Feature',
        'id': 100,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 6,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'ROUTE DE TURIN',
          'IDVOIE_NCA': '06088AT0451',
          'NUM': 36,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26262808,
            43.70262748
          ]
        },
        'type': 'Feature',
        'id': 101,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 11,
          'COMPLEMENT': 'Au niveau du n\u00b0',
          'NOM_VOIE': 'RUE D\'ITALIE',
          'IDVOIE_NCA': '06088AI0088',
          'NUM': 16,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28213274,
            43.70302927
          ]
        },
        'type': 'Feature',
        'id': 102,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 13,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE CAIS DE PIERLAS',
          'IDVOIE_NCA': '06088AC0066',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25333455,
            43.69544522
          ]
        },
        'type': 'Feature',
        'id': 103,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 28,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DANTE',
          'IDVOIE_NCA': '06088AD0077',
          'NUM': 17,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26997815,
            43.69573788
          ]
        },
        'type': 'Feature',
        'id': 104,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 29,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE SAINT-FRANCOIS DE PAULE',
          'IDVOIE_NCA': '06088AS0264',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25883339,
            43.70806841
          ]
        },
        'type': 'Feature',
        'id': 105,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 44,
          'COMPLEMENT': 'Angle rue Pietri',
          'NOM_VOIE': 'RUE CLEMENT ROASSAL',
          'IDVOIE_NCA': '06088AC1232',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2823226,
            43.70417117
          ]
        },
        'type': 'Feature',
        'id': 106,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 47,
          'COMPLEMENT': 'Sur le c\u00f4t\u00e9 Nord',
          'NOM_VOIE': 'RUE SMOLLETT',
          'IDVOIE_NCA': '06088AS1254',
          'NUM': 5,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27274414,
            43.69994194
          ]
        },
        'type': 'Feature',
        'id': 107,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 59,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DE L\'HOTEL DES POSTES',
          'IDVOIE_NCA': '06088AH0231',
          'NUM': 27,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25462404,
            43.71559033
          ]
        },
        'type': 'Feature',
        'id': 108,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 76,
          'COMPLEMENT': 'A son d\u00e9bouch\u00e9 de la rue Grignan',
          'NOM_VOIE': 'AVENUE FRANCOIS BOTTAU',
          'IDVOIE_NCA': '06088AF0616',
          'NUM': 14,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26774221,
            43.69649453
          ]
        },
        'type': 'Feature',
        'id': 109,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 77,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE DE VERDUN',
          'IDVOIE_NCA': '06088AV0253',
          'NUM': 16,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2649587,
            43.69733281
          ]
        },
        'type': 'Feature',
        'id': 110,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 113,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE MACCARANI',
          'IDVOIE_NCA': '06088AM0011',
          'NUM': 7,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2546744,
            43.69387995
          ]
        },
        'type': 'Feature',
        'id': 111,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 116,
          'COMPLEMENT': 'Au d\u00e9bouch\u00e9 Promenade des Anglais',
          'NOM_VOIE': 'RUE ANDRIOLI',
          'IDVOIE_NCA': '06088AA0616',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26112818,
            43.70350348
          ]
        },
        'type': 'Feature',
        'id': 112,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 120,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE GOUNOD',
          'IDVOIE_NCA': '06088AG0726',
          'NUM': 56,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26107721,
            43.69514942
          ]
        },
        'type': 'Feature',
        'id': 113,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 121,
          'COMPLEMENT': 'Au droit du n\u00b0 2 sur une longueur de 12 m\u00e8tres',
          'NOM_VOIE': 'RUE MEYERBEER',
          'IDVOIE_NCA': '06088AM0880',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27981344,
            43.71875378
          ]
        },
        'type': 'Feature',
        'id': 114,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 128,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'CORNICHE FRERE MARC',
          'IDVOIE_NCA': '06088AF0759',
          'NUM': 20,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25976548,
            43.71458114
          ]
        },
        'type': 'Feature',
        'id': 115,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 134,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE MICHELET',
          'IDVOIE_NCA': '06088AM0935',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2851979,
            43.71875988
          ]
        },
        'type': 'Feature',
        'id': 116,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 144,
          'COMPLEMENT': 'Face au n\u00b0, sous l\'autopont',
          'NOM_VOIE': 'ROUTE DE TURIN',
          'IDVOIE_NCA': '06088AT0451',
          'NUM': 106,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24944054,
            43.71068502
          ]
        },
        'type': 'Feature',
        'id': 117,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 147,
          'COMPLEMENT': 'Au droit du num\u00e9ro',
          'NOM_VOIE': 'AVENUE DE PESSICART',
          'IDVOIE_NCA': '06088AP0704',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24928325,
            43.72412302
          ]
        },
        'type': 'Feature',
        'id': 118,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 155,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'AVENUE ANTOINE VERAN',
          'IDVOIE_NCA': '06088AA0682',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28576476,
            43.7176992
          ]
        },
        'type': 'Feature',
        'id': 119,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 189,
          'COMPLEMENT': 'Sur le parking situ\u00e9 au droit du n\u00b0',
          'NOM_VOIE': 'IMPASSE GUIDOTTI',
          'IDVOIE_NCA': '06088AG0957',
          'NUM': 7,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2344271,
            43.70370295
          ]
        },
        'type': 'Feature',
        'id': 120,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 194,
          'COMPLEMENT': 'A hauteur du n\u00b0 153 angle rue des Etoiles',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 153,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27738751,
            43.70801135
          ]
        },
        'type': 'Feature',
        'id': 121,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 209,
          'COMPLEMENT': 'Dans le parc-autos \u00e0 proximit\u00e9 du jardin',
          'NOM_VOIE': 'JARDIN ET PARC-AUTOS EL NOUZAH',
          'IDVOIE_NCA': '06088BA0209',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2687106,
            43.70246158
          ]
        },
        'type': 'Feature',
        'id': 122,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 213,
          'COMPLEMENT': 'Au droit de la m\u00e9diath\u00e8que',
          'NOM_VOIE': 'RUE LAMARTINE',
          'IDVOIE_NCA': '06088AL0077',
          'NUM': 16,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29298721,
            43.70615457
          ]
        },
        'type': 'Feature',
        'id': 123,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 217,
          'COMPLEMENT': 'A son d\u00e9bouch\u00e9 sur la rue Louis Garneray',
          'NOM_VOIE': 'RUE DE NATHANYA',
          'IDVOIE_NCA': '06088AN0011',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28016255,
            43.71484523
          ]
        },
        'type': 'Feature',
        'id': 124,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 218,
          'COMPLEMENT': 'Sur le parc-autos, angle Corniche Sainte-Rosalie \/ bd Pasteur',
          'NOM_VOIE': 'BOULEVARD PASTEUR',
          'IDVOIE_NCA': '06088AP0440',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29053537,
            43.69298169
          ]
        },
        'type': 'Feature',
        'id': 125,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 222,
          'COMPLEMENT': 'Au droit du Parc Vigier',
          'NOM_VOIE': 'BOULEVARD FRANCK PILATTE',
          'IDVOIE_NCA': '06088AF0594',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21556991,
            43.70787175
          ]
        },
        'type': 'Feature',
        'id': 126,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 235,
          'NOM_VOIE': 'PLACE DOMINIQUE FIGHIERA',
          'IDVOIE_NCA': '06088SD0543',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19966434,
            43.68028387
          ]
        },
        'type': 'Feature',
        'id': 127,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 252,
          'COMPLEMENT': 'Sur le parking de surface au droit du n\u00b0',
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28584539,
            43.71436503
          ]
        },
        'type': 'Feature',
        'id': 128,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 265,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE EMILE LEONARD',
          'IDVOIE_NCA': '06088AE0250',
          'NUM': 10,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28659492,
            43.6955102
          ]
        },
        'type': 'Feature',
        'id': 129,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 648,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'BOULEVARD STALINGRAD',
          'IDVOIE_NCA': '06088AS1364',
          'NUM': 50,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27487167,
            43.72489415
          ]
        },
        'type': 'Feature',
        'id': 130,
        'properties': {
          'CONFORMITE': 2,
          'IDENT': 592,
          'NOM_VOIE': 'AVENUE REINE VICTORIA',
          'IDVOIE_NCA': '06088AR0209',
          'NUM': 36,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2581693,
            43.7153517
          ]
        },
        'type': 'Feature',
        'id': 131,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 657,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD AUGUSTE RAYNAUD',
          'IDVOIE_NCA': '06088AA1166',
          'NUM': 56,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25978669,
            43.71321826
          ]
        },
        'type': 'Feature',
        'id': 132,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 659,
          'NOM_VOIE': 'RUE THEODORE DE BANVILLE',
          'IDVOIE_NCA': '06088AT0154',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26111418,
            43.70831417
          ]
        },
        'type': 'Feature',
        'id': 133,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 2,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE CLEMENT ROASSAL',
          'IDVOIE_NCA': '06088AC1232',
          'NUM': 10,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28415018,
            43.70739416
          ]
        },
        'type': 'Feature',
        'id': 134,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 14,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE THAON DE REVEL',
          'IDVOIE_NCA': '06088AT0132',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19417037,
            43.71074949
          ]
        },
        'type': 'Feature',
        'id': 135,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 20,
          'COMPLEMENT': 'face au n\u00b0, sur le parking \u00e0 l\'angle de la voie de desserte de l\'\u00e9cole Saint-Isidore',
          'NOM_VOIE': 'AVENUE AUGUSTE VEROLA',
          'IDVOIE_NCA': '06088AS0333',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19651553,
            43.71086564
          ]
        },
        'type': 'Feature',
        'id': 136,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 21,
          'COMPLEMENT': 'A son d\u00e9bouch\u00e9 sur la place Saint-Isidore',
          'NOM_VOIE': 'AVENUE SAINTE-MARGUERITE',
          'IDVOIE_NCA': '06088AS0836',
          'NUM': 459,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28664928,
            43.70488213
          ]
        },
        'type': 'Feature',
        'id': 137,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 26,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD GENERAL LOUIS DELFINO',
          'IDVOIE_NCA': '06088AG0396',
          'NUM': 33,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29014015,
            43.71539058
          ]
        },
        'type': 'Feature',
        'id': 138,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 31,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE DENIS SEMERIA',
          'IDVOIE_NCA': '06088AD0154',
          'NUM': 44,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26829148,
            43.69842479
          ]
        },
        'type': 'Feature',
        'id': 139,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 66,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE DE LA LIBERTE',
          'IDVOIE_NCA': '06088AL0286',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2658479,
            43.70080506
          ]
        },
        'type': 'Feature',
        'id': 140,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 70,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE PAUL DEROULEDE',
          'IDVOIE_NCA': '06088AP0539',
          'NUM': 14,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.277914,
            43.69902025
          ]
        },
        'type': 'Feature',
        'id': 141,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 72,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'PLACE SAINT-FRAN\u00c7OIS',
          'IDVOIE_NCA': '06088SS0231',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27706139,
            43.70119892
          ]
        },
        'type': 'Feature',
        'id': 142,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 84,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DELILLE',
          'IDVOIE_NCA': '06088AD0121',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29141676,
            43.70325222
          ]
        },
        'type': 'Feature',
        'id': 143,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 86,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD GENERAL LOUIS DELFINO',
          'IDVOIE_NCA': '06088AG0396',
          'NUM': 80,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29042315,
            43.71413524
          ]
        },
        'type': 'Feature',
        'id': 144,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 88,
          'COMPLEMENT': 'A l\'angle de la rue Forn\u00e9ro M\u00e9nei',
          'NOM_VOIE': 'RUE ACCHIARDI DE SAINT-LEGER',
          'IDVOIE_NCA': '06088AA0088',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25360743,
            43.69978422
          ]
        },
        'type': 'Feature',
        'id': 145,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 90,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE SHAKESPEARE',
          'IDVOIE_NCA': '06088AS1221',
          'NUM': 10,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27223345,
            43.70388811
          ]
        },
        'type': 'Feature',
        'id': 146,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 95,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'AVENUE MARECHAL FOCH',
          'IDVOIE_NCA': '06088AM0440',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26149642,
            43.70176463
          ]
        },
        'type': 'Feature',
        'id': 147,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 108,
          'COMPLEMENT': 'Au n\u00b0',
          'NOM_VOIE': 'AVENUE GEORGES CLEMENCEAU',
          'IDVOIE_NCA': '06088AG0484',
          'NUM': 30,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25927145,
            43.69930919
          ]
        },
        'type': 'Feature',
        'id': 148,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 112,
          'COMPLEMENT': 'A hauteur',
          'NOM_VOIE': 'RUE BERLIOZ',
          'IDVOIE_NCA': '06088AB0561',
          'NUM': 12,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25448288,
            43.69664426
          ]
        },
        'type': 'Feature',
        'id': 149,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 132,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE BOTTERO',
          'IDVOIE_NCA': '06088AB0913',
          'NUM': 11,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2716429,
            43.71423364
          ]
        },
        'type': 'Feature',
        'id': 150,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 141,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE CIMIEZ',
          'IDVOIE_NCA': '06088AC1089',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25369685,
            43.73087195
          ]
        },
        'type': 'Feature',
        'id': 151,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 148,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'BOULEVARD HENRI SAPPIA',
          'IDVOIE_NCA': '06088AH0165',
          'NUM': 6,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25027081,
            43.72823733
          ]
        },
        'type': 'Feature',
        'id': 152,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 149,
          'COMPLEMENT': 'Sur le c\u00f4t\u00e9 Sud \u00e0 20 m\u00e8tres \u00e0 l\'Est du n\u00b0',
          'NOM_VOIE': 'AVENUE CERNUSCHI',
          'IDVOIE_NCA': '06088AC0638',
          'NUM': 45,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22404983,
            43.67207691
          ]
        },
        'type': 'Feature',
        'id': 153,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 177,
          'COMPLEMENT': 'Au d\u00e9bouch\u00e9 sur le boulevard Ren\u00e9 Cassin',
          'NOM_VOIE': 'RUE CHARLES CHAUVE',
          'IDVOIE_NCA': '06088AC0786',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27589099,
            43.73060282
          ]
        },
        'type': 'Feature',
        'id': 154,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 181,
          'COMPLEMENT': 'Sur le c\u00f4t\u00e9 OUEST, au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE CAP DE CROIX',
          'IDVOIE_NCA': '06088AC0209',
          'NUM': 55,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28768741,
            43.70732873
          ]
        },
        'type': 'Feature',
        'id': 155,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 185,
          'COMPLEMENT': 'Auguste Gal prolong\u00e9e',
          'NOM_VOIE': 'RUE AUGUSTE GAL',
          'IDVOIE_NCA': '06088AA1144',
          'NUM': 55,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25142079,
            43.69332748
          ]
        },
        'type': 'Feature',
        'id': 156,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 205,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE PAUL VALERY',
          'IDVOIE_NCA': '06088AP0583',
          'NUM': 6,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28441937,
            43.71309213
          ]
        },
        'type': 'Feature',
        'id': 157,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 210,
          'COMPLEMENT': 'Au d\u00e9bouch\u00e9 sur la route de Turin',
          'NOM_VOIE': 'RUE DE FONTAN',
          'IDVOIE_NCA': '06088AF0407',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.267603,
            43.69962389
          ]
        },
        'type': 'Feature',
        'id': 158,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 211,
          'COMPLEMENT': 'Sur le parc-autos c\u00f4t\u00e9 Nord au d\u00e9bouch\u00e9 de la rue Longchamp',
          'NOM_VOIE': 'RUE MARECHAL JOFFRE',
          'IDVOIE_NCA': '06088AM0451',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22559733,
            43.67492774
          ]
        },
        'type': 'Feature',
        'id': 159,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 220,
          'COMPLEMENT': 'Sur le c\u00f4t\u00e9 Nord dans le parc-autos intersection rue Bashkirsteff',
          'NOM_VOIE': 'RUE AUGUSTE PEGURIER',
          'IDVOIE_NCA': '06088AA1160',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26668396,
            43.69986304
          ]
        },
        'type': 'Feature',
        'id': 160,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 223,
          'COMPLEMENT': 'Angle boulevard Victor Hugo',
          'NOM_VOIE': 'RUE RAYNARDI',
          'IDVOIE_NCA': '06088AR0132',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28678562,
            43.70538659
          ]
        },
        'type': 'Feature',
        'id': 161,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 224,
          'COMPLEMENT': 'Angle rue Auguste Gal',
          'NOM_VOIE': 'RUE PAUL REBOUX',
          'IDVOIE_NCA': '06088AP0561',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26224379,
            43.70427313
          ]
        },
        'type': 'Feature',
        'id': 162,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 229,
          'COMPLEMENT': 'Parc-autos S.N.C.F. (propri\u00e9t\u00e9 priv\u00e9e)',
          'NOM_VOIE': 'AVENUE THIERS',
          'IDVOIE_NCA': '06088AT0187',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28367186,
            43.70560831
          ]
        },
        'type': 'Feature',
        'id': 163,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 249,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'BOULEVARD GENERAL LOUIS DELFINO',
          'IDVOIE_NCA': '06088AG0396',
          'NUM': 10,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28534675,
            43.69944227
          ]
        },
        'type': 'Feature',
        'id': 164,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 250,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE BAVASTRO',
          'IDVOIE_NCA': '06088AB0341',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21173066,
            43.66809577
          ]
        },
        'type': 'Feature',
        'id': 165,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 251,
          'COMPLEMENT': 'face \u00e0 la rue Costes Bellonte',
          'NOM_VOIE': 'AVENUE CHARLES LINDBERGH',
          'IDVOIE_NCA': '06088AL0374',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25076459,
            43.70489648
          ]
        },
        'type': 'Feature',
        'id': 166,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 253,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE PAUL ARENE',
          'IDVOIE_NCA': '06088AP0495',
          'NUM': 11,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25669744,
            43.7106551
          ]
        },
        'type': 'Feature',
        'id': 167,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 481,
          'COMPLEMENT': 'Face au n\u00b046 Bis',
          'NOM_VOIE': 'RUE ANDRE THEURIET PROLONGEE',
          'IDVOIE_NCA': '06088AA0594',
          'NUM': 51,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26097751,
            43.71158277
          ]
        },
        'type': 'Feature',
        'id': 168,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 650,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE EDOUARD DALMAS',
          'IDVOIE_NCA': '06088AE0099',
          'NUM': 6,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29376392,
            43.70621351
          ]
        },
        'type': 'Feature',
        'id': 169,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 4,
          'COMPLEMENT': 'A hauteur',
          'NOM_VOIE': 'RUE LOUIS GARNERAY',
          'IDVOIE_NCA': '06088AL0528',
          'NUM': 16,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26529354,
            43.70654391
          ]
        },
        'type': 'Feature',
        'id': 170,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 5,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE ROUGET DE LISLE',
          'IDVOIE_NCA': '06088AR0671',
          'NUM': 5,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26128033,
            43.69653439
          ]
        },
        'type': 'Feature',
        'id': 171,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 24,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE ANTONIO FERNANDEZ',
          'IDVOIE_NCA': '06088AF0192',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28947836,
            43.70691228
          ]
        },
        'type': 'Feature',
        'id': 172,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 32,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'CHEMIN SORGENTINO',
          'IDVOIE_NCA': '06088AS1287',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28103442,
            43.70609631
          ]
        },
        'type': 'Feature',
        'id': 173,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 46,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'TRAVERSE RUE CHANOINE BAILET \/ RUE ACCHIARDI DE SAINT-LEGER',
          'IDVOIE_NCA': '06088AA0099',
          'NUM': 6,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25128735,
            43.69714331
          ]
        },
        'type': 'Feature',
        'id': 174,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 53,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD FRAN\u00c7OIS GROSSO',
          'IDVOIE_NCA': '06088AF0638',
          'NUM': 45,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25421421,
            43.71153115
          ]
        },
        'type': 'Feature',
        'id': 175,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 68,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE GEORGES DOUBLET',
          'IDVOIE_NCA': '06088AG0495',
          'NUM': 12,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28462719,
            43.70061029
          ]
        },
        'type': 'Feature',
        'id': 176,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 81,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE BONAPARTE',
          'IDVOIE_NCA': '06088AB0803',
          'NUM': 35,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26565408,
            43.70759716
          ]
        },
        'type': 'Feature',
        'id': 177,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 85,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE DIDEROT',
          'IDVOIE_NCA': '06088AD0275',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28403359,
            43.70145684
          ]
        },
        'type': 'Feature',
        'id': 178,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 94,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE BARLA',
          'IDVOIE_NCA': '06088AB0209',
          'NUM': 20,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26181756,
            43.69697817
          ]
        },
        'type': 'Feature',
        'id': 179,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 96,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DE LA BUFFA',
          'IDVOIE_NCA': '06088AB1067',
          'NUM': 31,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2818306,
            43.70502873
          ]
        },
        'type': 'Feature',
        'id': 180,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 102,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD RISSO',
          'IDVOIE_NCA': '06088AR0385',
          'NUM': 28,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26991575,
            43.70476403
          ]
        },
        'type': 'Feature',
        'id': 181,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 117,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE NOTRE-DAME',
          'IDVOIE_NCA': '06088AN0110',
          'NUM': 8,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21792463,
            43.66981277
          ]
        },
        'type': 'Feature',
        'id': 182,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 119,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD RENE CASSIN',
          'IDVOIE_NCA': '06088AM0594',
          'NUM': 96,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25756546,
            43.69443939
          ]
        },
        'type': 'Feature',
        'id': 183,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 133,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'RUE CRONSTADT',
          'IDVOIE_NCA': '06088AC1936',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21352503,
            43.68631652
          ]
        },
        'type': 'Feature',
        'id': 184,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 137,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE DE LA LANTERNE',
          'IDVOIE_NCA': '06088AL0099',
          'NUM': 234,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.30016695,
            43.73871019
          ]
        },
        'type': 'Feature',
        'id': 185,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 143,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE GENERAL OLRY',
          'IDVOIE_NCA': '06088AO0060',
          'NUM': 14,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23069646,
            43.67953184
          ]
        },
        'type': 'Feature',
        'id': 186,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 161,
          'COMPLEMENT': 'Sur le trottoir SUD \u00e0 l\'Ouest de la Pergola de Carras',
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 307,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.30860591,
            43.73990292
          ]
        },
        'type': 'Feature',
        'id': 187,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 162,
          'COMPLEMENT': 'Sur le parking du th\u00e9\u00e2tre Lino Ventura',
          'NOM_VOIE': 'BOULEVARD DE L\'ARIANE',
          'IDVOIE_NCA': '06088AA0858',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26907538,
            43.70325567
          ]
        },
        'type': 'Feature',
        'id': 188,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 163,
          'COMPLEMENT': 'A 7 m\u00e8tres du carrefour avenue Mar\u00e9chal Foch',
          'NOM_VOIE': 'RUE DOCTEUR ALBERT BALESTRE',
          'IDVOIE_NCA': '06088AD0341',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26306496,
            43.71296693
          ]
        },
        'type': 'Feature',
        'id': 189,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 164,
          'COMPLEMENT': 'Sur le parc-autos hors ligne Jeanne d\'Arc',
          'NOM_VOIE': 'AVENUE SAINT-LAMBERT',
          'IDVOIE_NCA': '06088AS0407',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 5
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28390604,
            43.72158537
          ]
        },
        'type': 'Feature',
        'id': 190,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 183,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE PROFESSEUR DELVALLE',
          'IDVOIE_NCA': '06088AP1375',
          'NUM': 14,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28622344,
            43.71433275
          ]
        },
        'type': 'Feature',
        'id': 191,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 191,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE EMILE LEONARD',
          'IDVOIE_NCA': '06088AE0250',
          'NUM': 11,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23891195,
            43.69893092
          ]
        },
        'type': 'Feature',
        'id': 192,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 193,
          'COMPLEMENT': 'Sur le parc-autos situ\u00e9 au n\u00b0 81',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 81,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25878894,
            43.71328518
          ]
        },
        'type': 'Feature',
        'id': 193,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 201,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD AUGUSTE RAYNAUD',
          'IDVOIE_NCA': '06088AA1166',
          'NUM': 32,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27861126,
            43.720449
          ]
        },
        'type': 'Feature',
        'id': 194,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 215,
          'COMPLEMENT': 'Sur la place',
          'NOM_VOIE': 'AVENUE DU MONASTERE',
          'IDVOIE_NCA': '06088AM1166',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27209371,
            43.72630659
          ]
        },
        'type': 'Feature',
        'id': 195,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 230,
          'COMPLEMENT': 'A hauteur du CEDAC de Cimiez',
          'NOM_VOIE': 'RUE THYDE MONNIER',
          'IDVOIE_NCA': '06088AM1185',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28207737,
            43.7120785
          ]
        },
        'type': 'Feature',
        'id': 196,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 240,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE JEAN BONFANTE',
          'IDVOIE_NCA': '06088AB0808',
          'NUM': 4,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19907684,
            43.6851677
          ]
        },
        'type': 'Feature',
        'id': 197,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 255,
          'COMPLEMENT': 'au droit de l\'acc\u00e8s handicap\u00e9 du lyc\u00e9e Thierry Maulnier',
          'NOM_VOIE': 'AVENUE CLAUDE DEBUSSY',
          'IDVOIE_NCA': '06088AD0115',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24197647,
            43.69626893
          ]
        },
        'type': 'Feature',
        'id': 198,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 584,
          'COMPLEMENT': 'Sur la parking de surface',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 44,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25597701,
            43.70672622
          ]
        },
        'type': 'Feature',
        'id': 199,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 653,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'BOULEVARD GAMBETTA',
          'IDVOIE_NCA': '06088AG0132',
          'NUM': 111,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26957418,
            43.69564819
          ]
        },
        'type': 'Feature',
        'id': 200,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 3,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE SAINT-FRANCOIS DE PAULE',
          'IDVOIE_NCA': '06088AS0264',
          'NUM': 26,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29251372,
            43.71680631
          ]
        },
        'type': 'Feature',
        'id': 201,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 7,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD VIRGILE BAREL',
          'IDVOIE_NCA': '06088AV0525',
          'NUM': 96,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25262923,
            43.71830244
          ]
        },
        'type': 'Feature',
        'id': 202,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 18,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE CESSOLE',
          'IDVOIE_NCA': '06088AC0660',
          'NUM': 96,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27297145,
            43.70308174
          ]
        },
        'type': 'Feature',
        'id': 203,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 27,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DUBOUCHAGE',
          'IDVOIE_NCA': '06088AD0616',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26707179,
            43.70362541
          ]
        },
        'type': 'Feature',
        'id': 204,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 36,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'AVENUE NOTRE-DAME',
          'IDVOIE_NCA': '06088AN0110',
          'NUM': 27,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25298621,
            43.70264096
          ]
        },
        'type': 'Feature',
        'id': 205,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 49,
          'COMPLEMENT': 'Au niveau du n\u00b0',
          'NOM_VOIE': 'BOULEVARD TZAREWITCH',
          'IDVOIE_NCA': '06088AT0462',
          'NUM': 21,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26206471,
            43.71392424
          ]
        },
        'type': 'Feature',
        'id': 206,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 58,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE JEANNE D\'ARC',
          'IDVOIE_NCA': '06088AJ0286',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2807596,
            43.71588132
          ]
        },
        'type': 'Feature',
        'id': 207,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 64,
          'NOM_VOIE': 'BOULEVARD PASTEUR',
          'IDVOIE_NCA': '06088AP0440',
          'NUM': 79,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25551576,
            43.69405466
          ]
        },
        'type': 'Feature',
        'id': 208,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 89,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE SAINT-PHILIPPE',
          'IDVOIE_NCA': '06088AS0550',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25551509,
            43.72679299
          ]
        },
        'type': 'Feature',
        'id': 209,
        'properties': {
          'CONFORMITE': 2,
          'IDENT': 97,
          'COMPLEMENT': 'Sur les parcs-autos face au n\u00b0 6 (au droit de la piscine)',
          'NOM_VOIE': 'PARC AUTOS COMTE DE FALICON',
          'IDVOIE_NCA': '06088BA0172',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2929525,
            43.70891934
          ]
        },
        'type': 'Feature',
        'id': 210,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 104,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'PLACE SAINT-ROCH',
          'IDVOIE_NCA': '06088SS0605',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24033039,
            43.6882981
          ]
        },
        'type': 'Feature',
        'id': 211,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 105,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 167,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28911763,
            43.69392289
          ]
        },
        'type': 'Feature',
        'id': 212,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 115,
          'COMPLEMENT': 'Face au n\u00b0 21',
          'NOM_VOIE': 'BOULEVARD FRANCK PILATTE',
          'IDVOIE_NCA': '06088AF0594',
          'NUM': 21,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28700084,
            43.71493216
          ]
        },
        'type': 'Feature',
        'id': 213,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 124,
          'COMPLEMENT': 'Sur la partie droite du parvis des ex entrep\u00f4ts Spada',
          'NOM_VOIE': 'AVENUE DENIS SEMERIA',
          'IDVOIE_NCA': '06088AD0154',
          'NUM': 22,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27126688,
            43.71179274
          ]
        },
        'type': 'Feature',
        'id': 214,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 142,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE CIMIEZ',
          'IDVOIE_NCA': '06088AC1089',
          'NUM': 35,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21765549,
            43.6776633
          ]
        },
        'type': 'Feature',
        'id': 215,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 145,
          'COMPLEMENT': 'Sur le parc-autos face au n\u00b0',
          'NOM_VOIE': 'AVENUE SAINTE-MARGUERITE',
          'IDVOIE_NCA': '06088AS0836',
          'NUM': 81,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22964759,
            43.6796333
          ]
        },
        'type': 'Feature',
        'id': 216,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 146,
          'NOM_VOIE': 'AVENUE DE LA CALIFORNIE',
          'IDVOIE_NCA': '06088AC0099',
          'NUM': 244,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27338324,
            43.70107272
          ]
        },
        'type': 'Feature',
        'id': 217,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 154,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE FONCET',
          'IDVOIE_NCA': '06088AF0363',
          'NUM': 5,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26167894,
            43.70895303
          ]
        },
        'type': 'Feature',
        'id': 218,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 158,
          'COMPLEMENT': 'Au niveau de la rue Thivin',
          'NOM_VOIE': 'PLACE DE LA GARE DU SUD',
          'IDVOIE_NCA': '06088SG0176',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24504606,
            43.69089541
          ]
        },
        'type': 'Feature',
        'id': 219,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 169,
          'COMPLEMENT': 'Sur le square',
          'NOM_VOIE': 'SQUARE GENERAL FERRIE',
          'IDVOIE_NCA': '06088SG0352',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19904858,
            43.67685318
          ]
        },
        'type': 'Feature',
        'id': 220,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 171,
          'COMPLEMENT': 'sur le parking au Sud du stade Charles Erhmann',
          'NOM_VOIE': 'VOIE D\'ACCES AU CADAM',
          'IDVOIE_NCA': '06088BA1532',
          'NUM': 155,
          'CODE_INSEE': '06088',
          'NB_PLACE': 6
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20098577,
            43.68484768
          ]
        },
        'type': 'Feature',
        'id': 221,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 172,
          'COMPLEMENT': 'Dans la voie desservant la cr\u00eache Woeffle',
          'NOM_VOIE': 'VOIE AU N\u00b0 68 AVENUE CYRNOS',
          'IDVOIE_NCA': '06088BA0536',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28096196,
            43.69673138
          ]
        },
        'type': 'Feature',
        'id': 222,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 176,
          'COMPLEMENT': 'Au niveau de l\'all\u00e9e des Justes',
          'NOM_VOIE': 'ALLEE DES JUSTES',
          'IDVOIE_NCA': '06088AF0368',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27229834,
            43.72503499
          ]
        },
        'type': 'Feature',
        'id': 223,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 182,
          'COMPLEMENT': 'Sur le parking de surface du C.N.R. (127 av Brancolar)',
          'NOM_VOIE': 'AVENUE DE BRANCOLAR',
          'IDVOIE_NCA': '06088AB0979',
          'NUM': 127,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28782615,
            43.70727856
          ]
        },
        'type': 'Feature',
        'id': 224,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 186,
          'COMPLEMENT': 'Auguste Gal prolong\u00e9e',
          'NOM_VOIE': 'RUE AUGUSTE GAL',
          'IDVOIE_NCA': '06088AA1144',
          'NUM': 52,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24695305,
            43.69234362
          ]
        },
        'type': 'Feature',
        'id': 225,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 190,
          'COMPLEMENT': 'A l\'angle de la rue de France',
          'NOM_VOIE': 'AVENUE EMILE HENRIOT',
          'IDVOIE_NCA': '06088AE0242',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24149805,
            43.69644999
          ]
        },
        'type': 'Feature',
        'id': 226,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 192,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 41,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23390508,
            43.70507576
          ]
        },
        'type': 'Feature',
        'id': 227,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 195,
          'COMPLEMENT': 'Sur le parking de surface situ\u00e9 au n\u00b0 169',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 169,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22975805,
            43.70889912
          ]
        },
        'type': 'Feature',
        'id': 228,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 196,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 209,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2135273,
            43.67842213
          ]
        },
        'type': 'Feature',
        'id': 229,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 202,
          'COMPLEMENT': 'Sur le parc-autos face au n\u00b0',
          'NOM_VOIE': 'AVENUE SAINTE-MARGUERITE',
          'IDVOIE_NCA': '06088AS0836',
          'NUM': 111,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25900746,
            43.70275857
          ]
        },
        'type': 'Feature',
        'id': 230,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 203,
          'COMPLEMENT': 'Au droit du n\u00b0 35 angle rue H\u00e9rold',
          'NOM_VOIE': 'AVENUE THIERS',
          'IDVOIE_NCA': '06088AT0187',
          'NUM': 35,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21065493,
            43.67090494
          ]
        },
        'type': 'Feature',
        'id': 231,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 216,
          'COMPLEMENT': 'Sur le parking \u00e0 l\'angle de la route de grenoble',
          'NOM_VOIE': 'BOULEVARD PAUL MONTEL',
          'IDVOIE_NCA': '06088AM1474',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26296952,
            43.69767121
          ]
        },
        'type': 'Feature',
        'id': 232,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 221,
          'COMPLEMENT': 'A l\'angle de la rue Piaf et de la rue du Congr\u00e8s',
          'NOM_VOIE': 'ALLEE EDITH PIAF',
          'IDVOIE_NCA': '06088BA1347',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26258833,
            43.7166342
          ]
        },
        'type': 'Feature',
        'id': 233,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 225,
          'COMPLEMENT': 'Au droit de l\'entr\u00e9e du coll\u00e8ge Val\u00e9ri',
          'NOM_VOIE': 'AVENUE SAINT-LAMBERT',
          'IDVOIE_NCA': '06088AS0407',
          'NUM': 128,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28972656,
            43.72456951
          ]
        },
        'type': 'Feature',
        'id': 234,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 646,
          'NOM_VOIE': 'ROUTE DE TURIN',
          'IDVOIE_NCA': '06088AT0451',
          'NUM': 186,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21239221,
            43.68691476
          ]
        },
        'type': 'Feature',
        'id': 235,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 9,
          'COMPLEMENT': 'A hauteur de l\'\u00e9cole de Fabron',
          'NOM_VOIE': 'AVENUE DE LA LANTERNE',
          'IDVOIE_NCA': '06088AL0099',
          'NUM': 229,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25694717,
            43.70856187
          ]
        },
        'type': 'Feature',
        'id': 236,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 10,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DABRAY',
          'IDVOIE_NCA': '06088AD0022',
          'NUM': 37,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25168201,
            43.69925202
          ]
        },
        'type': 'Feature',
        'id': 237,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 12,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DES POTIERS',
          'IDVOIE_NCA': '06088AP1265',
          'NUM': 65,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29320207,
            43.71354985
          ]
        },
        'type': 'Feature',
        'id': 238,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 15,
          'COMPLEMENT': 'A l\'ouest du d\u00e9bouch\u00e9 de la rue Bertola',
          'NOM_VOIE': 'RUE DES ORANGERS',
          'IDVOIE_NCA': '06088AO0132',
          'NUM': 3,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.30174324,
            43.73751769
          ]
        },
        'type': 'Feature',
        'id': 239,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 16,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'CHEMIN DU CHATEAU SAINT-PIERRE',
          'IDVOIE_NCA': '06088AC0902',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25082838,
            43.72221223
          ]
        },
        'type': 'Feature',
        'id': 240,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 19,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DE CESSOLE',
          'IDVOIE_NCA': '06088AC0660',
          'NUM': 142,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2643463,
            43.70260273
          ]
        },
        'type': 'Feature',
        'id': 241,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 39,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE D\'ITALIE',
          'IDVOIE_NCA': '06088AI0088',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28644838,
            43.69864716
          ]
        },
        'type': 'Feature',
        'id': 242,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 60,
          'COMPLEMENT': 'A l\'angle de la rue, au droit du n\u00b0',
          'NOM_VOIE': 'RUE ARSON',
          'IDVOIE_NCA': '06088AA0957',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28920327,
            43.70544173
          ]
        },
        'type': 'Feature',
        'id': 243,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 62,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE THEODORE GASIGLIA',
          'IDVOIE_NCA': '06088AT0165',
          'NUM': 31,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25955755,
            43.69837204
          ]
        },
        'type': 'Feature',
        'id': 244,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 65,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD VICTOR HUGO',
          'IDVOIE_NCA': '06088AV0308',
          'NUM': 50,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22065254,
            43.67802239
          ]
        },
        'type': 'Feature',
        'id': 245,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 67,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE SAINTE-MARGUERITE',
          'IDVOIE_NCA': '06088AS0836',
          'NUM': 40,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26956637,
            43.70099969
          ]
        },
        'type': 'Feature',
        'id': 246,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 73,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD DUBOUCHAGE',
          'IDVOIE_NCA': '06088AD0616',
          'NUM': 35,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28587299,
            43.70300959
          ]
        },
        'type': 'Feature',
        'id': 247,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 79,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE SMOLLETT',
          'IDVOIE_NCA': '06088AS1254',
          'NUM': 34,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26431685,
            43.70784835
          ]
        },
        'type': 'Feature',
        'id': 248,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 82,
          'COMPLEMENT': 'Au droit du n\u00b0 - Angle Boissy d\'Anglas',
          'NOM_VOIE': 'AVENUE MIRABEAU',
          'IDVOIE_NCA': '06088AM1023',
          'NUM': 4,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23999947,
            43.68864266
          ]
        },
        'type': 'Feature',
        'id': 249,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 92,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE DE LA CALIFORNIE',
          'IDVOIE_NCA': '06088AC0099',
          'NUM': 75,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25139058,
            43.70180083
          ]
        },
        'type': 'Feature',
        'id': 250,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 98,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD FRAN\u00c7OIS GROSSO',
          'IDVOIE_NCA': '06088AF0638',
          'NUM': 72,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28684254,
            43.70766836
          ]
        },
        'type': 'Feature',
        'id': 251,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 103,
          'COMPLEMENT': 'C\u00f4t\u00e9 Est de la contre-all\u00e9e \u00e0 hauteur du n\u00b0',
          'NOM_VOIE': 'RUE DE ROQUEBILLIERE',
          'IDVOIE_NCA': '06088AR0561',
          'NUM': 73,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26722189,
            43.70468617
          ]
        },
        'type': 'Feature',
        'id': 252,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 106,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'RUE DE PARIS',
          'IDVOIE_NCA': '06088AP0341',
          'NUM': 25,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26540833,
            43.72485694
          ]
        },
        'type': 'Feature',
        'id': 253,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 111,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'AVENUE HENRY DUNANT',
          'IDVOIE_NCA': '06088AH0176',
          'NUM': 77,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25660588,
            43.69767957
          ]
        },
        'type': 'Feature',
        'id': 254,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 122,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'BOULEVARD VICTOR HUGO',
          'IDVOIE_NCA': '06088AV0308',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27814044,
            43.70199358
          ]
        },
        'type': 'Feature',
        'id': 255,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 126,
          'COMPLEMENT': 'Angle rue Penchinatti',
          'NOM_VOIE': 'AVENUE SAINT-JEAN-BAPTISTE',
          'IDVOIE_NCA': '06088AS0352',
          'NUM': 14,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22187637,
            43.66968892
          ]
        },
        'type': 'Feature',
        'id': 256,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 127,
          'COMPLEMENT': 'Sur le parc-autos \u00e0 hauteur du n\u00b0',
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 385,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21904275,
            43.67901332
          ]
        },
        'type': 'Feature',
        'id': 257,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 139,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'BOULEVARD NAPOLEON III',
          'IDVOIE_NCA': '06088AO0198',
          'NUM': 147,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25290937,
            43.70202281
          ]
        },
        'type': 'Feature',
        'id': 258,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 150,
          'COMPLEMENT': 'Au droit des num\u00e9ros',
          'NOM_VOIE': 'RUE DE JUSSIEU',
          'IDVOIE_NCA': '06088AJ0550',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29838461,
            43.73675846
          ]
        },
        'type': 'Feature',
        'id': 259,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 156,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE ANATOLE DE MONZIE',
          'IDVOIE_NCA': '06088AD0137',
          'NUM': 22,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25999313,
            43.70852881
          ]
        },
        'type': 'Feature',
        'id': 260,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 159,
          'COMPLEMENT': 'C\u00f4t\u00e9 rue Alfred Binet (au droit de l\'intermarch\u00e9)',
          'NOM_VOIE': 'PLACE DE LA GARE DU SUD',
          'IDVOIE_NCA': '06088SG0176',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26066873,
            43.70916978
          ]
        },
        'type': 'Feature',
        'id': 261,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 160,
          'COMPLEMENT': 'A l\'ouest de la rue de la Gare',
          'NOM_VOIE': 'PLACE DE LA GARE DU SUD',
          'IDVOIE_NCA': '06088SG0176',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 5
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25056226,
            43.71376063
          ]
        },
        'type': 'Feature',
        'id': 262,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 166,
          'COMPLEMENT': 'Face au n\u00b0',
          'NOM_VOIE': 'JARDIN WILLIAM ET CATHERINE BOOTH',
          'IDVOIE_NCA': '06088SW0030',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24574905,
            43.69096214
          ]
        },
        'type': 'Feature',
        'id': 263,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 170,
          'COMPLEMENT': '\u00e0 son d\u00e9bouch\u00e9 sur la Promenade des Anglais',
          'NOM_VOIE': 'SQUARE GENERAL FERRIE',
          'IDVOIE_NCA': '06088SG0352',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27825642,
            43.70675111
          ]
        },
        'type': 'Feature',
        'id': 264,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 174,
          'COMPLEMENT': 'Au bas de la voie',
          'NOM_VOIE': 'ALLEE HENRI BOSCO',
          'IDVOIE_NCA': '06088AH0074',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28786844,
            43.70738027
          ]
        },
        'type': 'Feature',
        'id': 265,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 187,
          'COMPLEMENT': 'Auguste Gal prolong\u00e9e',
          'NOM_VOIE': 'RUE AUGUSTE GAL',
          'IDVOIE_NCA': '06088AA1144',
          'NUM': 54,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.22478445,
            43.71445612
          ]
        },
        'type': 'Feature',
        'id': 266,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 197,
          'COMPLEMENT': 'Sur le parc-autos devant l\'\u00e9cole Barsamian',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 279,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28983985,
            43.73184955
          ]
        },
        'type': 'Feature',
        'id': 267,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 204,
          'COMPLEMENT': 'Sur le parc-autos hors ligne, face \u00e0 l\'impasse des Liserons',
          'NOM_VOIE': 'ROUTE DE TURIN',
          'IDVOIE_NCA': '06088AT0451',
          'NUM': 325,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26298572,
            43.69631151
          ]
        },
        'type': 'Feature',
        'id': 268,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 208,
          'COMPLEMENT': 'A l\'angle de la rue du Congr\u00e8s',
          'NOM_VOIE': 'PLACE CROIX DE MARBRE',
          'IDVOIE_NCA': '06088SC1914',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27415925,
            43.7030958
          ]
        },
        'type': 'Feature',
        'id': 269,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 219,
          'COMPLEMENT': 'Au droit de l\'h\u00f4pital Saint-Roch',
          'NOM_VOIE': 'RUE PIERRE DEVOLUY',
          'IDVOIE_NCA': '06088AP0880',
          'NUM': 5,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28550921,
            43.72320731
          ]
        },
        'type': 'Feature',
        'id': 270,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 234,
          'COMPLEMENT': 'Parking Voie Romaine \/ Colonel Gassin',
          'NOM_VOIE': 'VOIE ROMAINE',
          'IDVOIE_NCA': '06088AV0583',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19316373,
            43.71239131
          ]
        },
        'type': 'Feature',
        'id': 271,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 237,
          'COMPLEMENT': 'Voie d\'acc\u00e8s \u00e0 l\'\u00e9cole, au droit de l\'\u00e9cole Saint-Isidore',
          'NOM_VOIE': 'AVENUE ANGELIQUE BRAQUET',
          'IDVOIE_NCA': '06088BA0293',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29294512,
            43.70866494
          ]
        },
        'type': 'Feature',
        'id': 272,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 256,
          'COMPLEMENT': 'A hauteur du n\u00b0',
          'NOM_VOIE': 'BOULEVARD SAINT-ROCH',
          'IDVOIE_NCA': '06088AS0594',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25698154,
            43.70963315
          ]
        },
        'type': 'Feature',
        'id': 273,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 260,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DABRAY',
          'IDVOIE_NCA': '06088AD0022',
          'NUM': 49,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26832451,
            43.70569413
          ]
        },
        'type': 'Feature',
        'id': 274,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 585,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE PERTINAX',
          'IDVOIE_NCA': '06088AP0682',
          'NUM': 7,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27721532,
            43.69507837
          ]
        },
        'type': 'Feature',
        'id': 275,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 651,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'RUE DES PONCHETTES',
          'IDVOIE_NCA': '06088AP1221',
          'NUM': 40,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26126497,
            43.7173114
          ]
        },
        'type': 'Feature',
        'id': 276,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 658,
          'COMPLEMENT': 'Au droit du n\u00b0',
          'NOM_VOIE': 'AVENUE ALFRED BORRIGLIONE',
          'IDVOIE_NCA': '06088AB0880',
          'NUM': 71,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25534414,
            43.71650801
          ]
        },
        'type': 'Feature',
        'id': 277,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 900,
          'COMPLEMENT': 'RUE ADER',
          'NOM_VOIE': 'AVENUE CLEMENT ADER',
          'IDVOIE_NCA': '06088AC1221',
          'NUM': 4,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24049205,
            43.68834563
          ]
        },
        'type': 'Feature',
        'id': 278,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 901,
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 165,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23933344,
            43.68767414
          ]
        },
        'type': 'Feature',
        'id': 279,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 902,
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 179,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23596281,
            43.68512219
          ]
        },
        'type': 'Feature',
        'id': 280,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 904,
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 221,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27155672,
            43.72571207
          ]
        },
        'type': 'Feature',
        'id': 281,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 905,
          'COMPLEMENT': 'DESSERTE BRANCOLAR',
          'NOM_VOIE': 'AVENUE DE BRANCOLAR',
          'IDVOIE_NCA': '06088AB0979',
          'NUM': 127,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27159685,
            43.72558889
          ]
        },
        'type': 'Feature',
        'id': 282,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 906,
          'COMPLEMENT': 'DESSERTE BRANCOLAR',
          'NOM_VOIE': 'AVENUE DE BRANCOLAR',
          'IDVOIE_NCA': '06088AB0979',
          'NUM': 127,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26505808,
            43.71379357
          ]
        },
        'type': 'Feature',
        'id': 283,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 907,
          'NOM_VOIE': 'RUE JOSEPH CADEI',
          'IDVOIE_NCA': '06088AJ0407',
          'NUM': 4,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25012539,
            43.72814517
          ]
        },
        'type': 'Feature',
        'id': 284,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 908,
          'NOM_VOIE': 'AVENUE CERNUSCHI',
          'IDVOIE_NCA': '06088AC0638',
          'NUM': 64,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28983417,
            43.71326497
          ]
        },
        'type': 'Feature',
        'id': 285,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 909,
          'COMPLEMENT': 'ANGLE RUELLE SAINT ROCH',
          'NOM_VOIE': 'RUE CHANOINE ALBIN',
          'IDVOIE_NCA': '06088AA0183',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19470165,
            43.70843697
          ]
        },
        'type': 'Feature',
        'id': 286,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 910,
          'NOM_VOIE': 'AVENUE PIERRE DE COUBERTIN',
          'IDVOIE_NCA': '06088BA1651',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25960766,
            43.71304527
          ]
        },
        'type': 'Feature',
        'id': 287,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 911,
          'COMPLEMENT': 'FACE  INSTITUT POMPIDOU',
          'NOM_VOIE': 'RUE THEODORE DE BANVILLE',
          'IDVOIE_NCA': '06088AT0154',
          'NUM': 13,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28897397,
            43.7093223
          ]
        },
        'type': 'Feature',
        'id': 288,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 912,
          'COMPLEMENT': 'PARKING SAINT JEAN D ANGELY  COTE  22 EME BCA',
          'NOM_VOIE': 'AVENUE DES DIABLES BLEUS',
          'IDVOIE_NCA': '06088AD0264',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28950694,
            43.70915345
          ]
        },
        'type': 'Feature',
        'id': 289,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 914,
          'NOM_VOIE': 'AVENUE DES DIABLES BLEUS',
          'IDVOIE_NCA': '06088AD0264',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28882491,
            43.70873687
          ]
        },
        'type': 'Feature',
        'id': 290,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 913,
          'COMPLEMENT': 'ING SAINT JEAN D ANGELY COTE 22 EME BCA',
          'NOM_VOIE': 'AVENUE DES DIABLES BLEUS',
          'IDVOIE_NCA': '06088AD0264',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2864593,
            43.70835548
          ]
        },
        'type': 'Feature',
        'id': 291,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 915,
          'COMPLEMENT': 'DANS LA GARE ROUTIERE',
          'NOM_VOIE': 'AVENUE DES DIABLES BLEUS',
          'IDVOIE_NCA': '06088AD0264',
          'NUM': 16,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29305576,
            43.72065893
          ]
        },
        'type': 'Feature',
        'id': 292,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 916,
          'COMPLEMENT': 'DEVANT ECOLE CESAIRE',
          'NOM_VOIE': 'RUE ESCOFFIER',
          'IDVOIE_NCA': '06088AE0401',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.27171324,
            43.69516811
          ]
        },
        'type': 'Feature',
        'id': 293,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 918,
          'NOM_VOIE': 'QUAI DES ETATS-UNIS',
          'IDVOIE_NCA': '06088AE0418',
          'NUM': 97,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20781593,
            43.70490501
          ]
        },
        'type': 'Feature',
        'id': 294,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 919,
          'COMPLEMENT': '371 TER',
          'NOM_VOIE': 'AVENUE DE FABRON',
          'IDVOIE_NCA': '06088AF0033',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20811986,
            43.67089654
          ]
        },
        'type': 'Feature',
        'id': 295,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 920,
          'COMPLEMENT': '57 ROUTE DE GRENOBLE',
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 57,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21115406,
            43.67051855
          ]
        },
        'type': 'Feature',
        'id': 296,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 921,
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 25,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19791156,
            43.6865362
          ]
        },
        'type': 'Feature',
        'id': 297,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 923,
          'COMPLEMENT': '52 AVENUE PIERRE ISNRD',
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 52,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.25926391,
            43.72247651
          ]
        },
        'type': 'Feature',
        'id': 298,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 924,
          'COMPLEMENT': 'DEVANT ENTR2E ATELIER DU STADE DU RAY',
          'NOM_VOIE': 'AVENUE ERNEST LAIROLLE',
          'IDVOIE_NCA': '06088AE0385',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28713214,
            43.72277062
          ]
        },
        'type': 'Feature',
        'id': 299,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 925,
          'COMPLEMENT': 'DEVANT MAIRIE ANNEXE',
          'NOM_VOIE': 'AVENUE JOSEPH RAYBAUD',
          'IDVOIE_NCA': '06088AL0264',
          'NUM': 183,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28566936,
            43.72513344
          ]
        },
        'type': 'Feature',
        'id': 300,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 926,
          'COMPLEMENT': 'ANGLE ROUTE DE LEVENS , PARKING GAUCHE',
          'NOM_VOIE': 'RUE MAURICE MACCARIO',
          'IDVOIE_NCA': '06088AM0022',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28551168,
            43.7252231
          ]
        },
        'type': 'Feature',
        'id': 301,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 927,
          'COMPLEMENT': 'ANGLE ROUTE DE LEVENS , PARKING DROIT',
          'NOM_VOIE': 'RUE MAURICE MACCARIO',
          'IDVOIE_NCA': '06088AM0022',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28489618,
            43.72473114
          ]
        },
        'type': 'Feature',
        'id': 302,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 928,
          'COMPLEMENT': 'SUR LA PLACE',
          'NOM_VOIE': 'RUE MAURICE MACCARIO',
          'IDVOIE_NCA': '06088AM0022',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.23672509,
            43.70130745
          ]
        },
        'type': 'Feature',
        'id': 303,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 929,
          'COMPLEMENT': 'PARKING A COTE DE PEUGEOT',
          'NOM_VOIE': 'BOULEVARD DE LA MADELEINE',
          'IDVOIE_NCA': '06088AM0044',
          'NUM': 117,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28119831,
            43.71859176
          ]
        },
        'type': 'Feature',
        'id': 304,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 930,
          'NOM_VOIE': 'BRETELLE SORTIE TUNNEL ANDRE LIAUTAUD - TENDE',
          'IDVOIE_NCA': '06088AP0040',
          'NUM': 62,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28324615,
            43.70080599
          ]
        },
        'type': 'Feature',
        'id': 305,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 931,
          'COMPLEMENT': 'PLACE DU PIN',
          'NOM_VOIE': 'PLACE DU PIN',
          'IDVOIE_NCA': '06088SP1045',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2826239,
            43.70364423
          ]
        },
        'type': 'Feature',
        'id': 306,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 932,
          'COMPLEMENT': 'AU DROIT DU 120',
          'NOM_VOIE': 'RUE DE ROQUEBILLIERE',
          'IDVOIE_NCA': '06088AR0561',
          'NUM': 120,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28765883,
            43.70884741
          ]
        },
        'type': 'Feature',
        'id': 307,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 933,
          'COMPLEMENT': 'DEVANT CLOS BOULES',
          'NOM_VOIE': 'RUE DE ROQUEBILLIERE',
          'IDVOIE_NCA': '06088AR0561',
          'NUM': 66,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20294452,
            43.68340454
          ]
        },
        'type': 'Feature',
        'id': 308,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 936,
          'NOM_VOIE': 'BOULEVARD MAITRE MAURICE SLAMA',
          'IDVOIE_NCA': '06088AD0233',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29340276,
            43.71288875
          ]
        },
        'type': 'Feature',
        'id': 309,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 937,
          'COMPLEMENT': 'EN FACE DU  5',
          'NOM_VOIE': 'PASSAGE DE LA TRANQUILLITE',
          'IDVOIE_NCA': '06088AT0407',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29363806,
            43.71291432
          ]
        },
        'type': 'Feature',
        'id': 310,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 938,
          'NOM_VOIE': 'PASSAGE DE LA TRANQUILLITE',
          'IDVOIE_NCA': '06088AT0407',
          'NUM': 7,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28526579,
            43.71645999
          ]
        },
        'type': 'Feature',
        'id': 311,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 939,
          'NOM_VOIE': 'AVENUE DU TRIDENT',
          'IDVOIE_NCA': '06088AT0429',
          'NUM': 18,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28456584,
            43.71296711
          ]
        },
        'type': 'Feature',
        'id': 312,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 940,
          'NOM_VOIE': 'ROUTE DE TURIN',
          'IDVOIE_NCA': '06088AT0451',
          'NUM': 38,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28551733,
            43.7305097
          ]
        },
        'type': 'Feature',
        'id': 313,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 941,
          'NOM_VOIE': 'ROUTE DE TURIN',
          'IDVOIE_NCA': '06088AT0451',
          'NUM': 284,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28621295,
            43.71211969
          ]
        },
        'type': 'Feature',
        'id': 314,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 942,
          'COMPLEMENT': 'PARKING MARECHAL VAUBAN A COTE COMMISSARIAT AUVARE',
          'NOM_VOIE': 'RUE MARECHAL VAUBAN',
          'IDVOIE_NCA': '06088AM0495',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2859664,
            43.71225101
          ]
        },
        'type': 'Feature',
        'id': 315,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 943,
          'COMPLEMENT': 'PARKING MARECHAL VAUBAN',
          'NOM_VOIE': 'RUE MARECHAL VAUBAN',
          'IDVOIE_NCA': '06088AM0495',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28583235,
            43.7123481
          ]
        },
        'type': 'Feature',
        'id': 316,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 944,
          'COMPLEMENT': 'PARKING MARECHAL VAUBAN',
          'NOM_VOIE': 'RUE MARECHAL VAUBAN',
          'IDVOIE_NCA': '06088AM0495',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28564969,
            43.71243279
          ]
        },
        'type': 'Feature',
        'id': 317,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 945,
          'COMPLEMENT': 'PARKING MARECHAL VAUBAN',
          'NOM_VOIE': 'RUE MARECHAL VAUBAN',
          'IDVOIE_NCA': '06088AM0495',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28552794,
            43.71256276
          ]
        },
        'type': 'Feature',
        'id': 318,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 946,
          'COMPLEMENT': 'PARKING MARECHAL VAUBAN',
          'NOM_VOIE': 'RUE MARECHAL VAUBAN',
          'IDVOIE_NCA': '06088AM0495',
          'NUM': 19,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20327282,
            43.68190151
          ]
        },
        'type': 'Feature',
        'id': 319,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 947,
          'COMPLEMENT': 'PARKING AU NIVEAU DU 36 AVENUE SIMONE VEIL',
          'NOM_VOIE': 'AVENUE SIMONE VEIL',
          'IDVOIE_NCA': '06088BA1596',
          'NUM': 36,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.20329032,
            43.68180428
          ]
        },
        'type': 'Feature',
        'id': 320,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 948,
          'COMPLEMENT': 'PARKING AU NIVEAU DU  36 AVENUE SIMONEVEIL',
          'NOM_VOIE': 'AVENUE SIMONE VEIL',
          'IDVOIE_NCA': '06088BA1596',
          'NUM': 36,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.24889561,
            43.72408248
          ]
        },
        'type': 'Feature',
        'id': 321,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 949,
          'NOM_VOIE': 'AVENUE ANTOINE VERAN',
          'IDVOIE_NCA': '06088AA0682',
          'NUM': 4,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19541598,
            43.69093383
          ]
        },
        'type': 'Feature',
        'id': 322,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 922,
          'COMPLEMENT': 'ROUTE DE GRENOBLE',
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 261,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19524922,
            43.69116661
          ]
        },
        'type': 'Feature',
        'id': 323,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 43,
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 261,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21656371,
            43.66718893
          ]
        },
        'type': 'Feature',
        'id': 324,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 903,
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 455,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29235096,
            43.72071857
          ]
        },
        'type': 'Feature',
        'id': 325,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 917,
          'COMPLEMENT': 'PARKING',
          'NOM_VOIE': 'RUE ESCOFFIER',
          'IDVOIE_NCA': '06088AE0401',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21060444,
            43.67913443
          ]
        },
        'type': 'Feature',
        'id': 326,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 934,
          'NOM_VOIE': 'AVENUE SAINTE-MARGUERITE',
          'IDVOIE_NCA': '06088AS0836',
          'NUM': 146,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.19452203,
            43.69696757
          ]
        },
        'type': 'Feature',
        'id': 327,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 935,
          'COMPLEMENT': 'TRAVERSE DES BARAQUES',
          'NOM_VOIE': 'TRAVERSE DES BARAQUES',
          'IDVOIE_NCA': '06088AB0105',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26120357,
            43.73957714
          ]
        },
        'type': 'Feature',
        'id': 328,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 950,
          'COMPLEMENT': 'face n\u00b0 232',
          'NOM_VOIE': 'AVENUE DE GAIRAUT',
          'IDVOIE_NCA': '06088AG0044',
          'NUM': 232,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.26746961,
            43.69483851
          ]
        },
        'type': 'Feature',
        'id': 329,
        'properties': {
          'CONFORMITE': 1,
          'IDENT': 951,
          'COMPLEMENT': 'FACE AU CENTENAIRE',
          'NOM_VOIE': 'PROMENADE DES ANGLAIS',
          'IDVOIE_NCA': '06088AA0627',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21383223,
            43.66999918
          ]
        },
        'type': 'Feature',
        'id': 330,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 955,
          'COMPLEMENT': 'ANCIEN PARKING \'RELAIS\'',
          'NOM_VOIE': 'ROUTE DE GRENOBLE',
          'IDVOIE_NCA': '06088AG0816',
          'NUM': 9,
          'CODE_INSEE': '06088',
          'NB_PLACE': 4
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.21597805,
            43.67026894
          ]
        },
        'type': 'Feature',
        'id': 331,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 957,
          'COMPLEMENT': 'FACE N\u00b0 111',
          'NOM_VOIE': 'AVENUE SAINT-AUGUSTIN',
          'IDVOIE_NCA': '06088AS0121',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 3
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29259099,
            43.70455598
          ]
        },
        'type': 'Feature',
        'id': 332,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 958,
          'COMPLEMENT': 'EDOUARD',
          'NOM_VOIE': 'RUE EDOUARD SCOFFIER',
          'IDVOIE_NCA': '06088AE0143',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29045507,
            43.70144809
          ]
        },
        'type': 'Feature',
        'id': 333,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 959,
          'COMPLEMENT': 'ANGLE SMOLETT',
          'NOM_VOIE': 'RUE SOLEAU',
          'IDVOIE_NCA': '06088AS1265',
          'NUM': 0,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.29054327,
            43.70144098
          ]
        },
        'type': 'Feature',
        'id': 334,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 960,
          'NOM_VOIE': 'RUE SOLEAU',
          'IDVOIE_NCA': '06088AS1265',
          'NUM': 12,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28392545,
            43.69905642
          ]
        },
        'type': 'Feature',
        'id': 335,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 961,
          'NOM_VOIE': 'RUE FRAN\u00c7OIS GUISOL',
          'IDVOIE_NCA': '06088AF0649',
          'NUM': 24,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.2564376,
            43.71978985
          ]
        },
        'type': 'Feature',
        'id': 336,
        'properties': {
          'CONFORMITE': 3,
          'IDENT': 962,
          'COMPLEMENT': 'Angle BOULEVARD GORBELLA',
          'NOM_VOIE': 'RUE DES VEDIANTIENS',
          'IDVOIE_NCA': '06088AV0176',
          'NUM': 1,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28447679,
            43.70152291
          ]
        },
        'type': 'Feature',
        'id': 337,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 963,
          'COMPLEMENT': 'RUE AUGUSTE GAL',
          'NOM_VOIE': 'RUE AUGUSTE GAL',
          'IDVOIE_NCA': '06088AA1144',
          'NUM': 2,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.28684987,
            43.70403175
          ]
        },
        'type': 'Feature',
        'id': 338,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 953,
          'NOM_VOIE': 'RUE BARBERIS',
          'IDVOIE_NCA': '06088AB0110',
          'NUM': 42,
          'CODE_INSEE': '06088',
          'NB_PLACE': 2
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.3025256,
            43.73754753
          ]
        },
        'type': 'Feature',
        'id': 339,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 961,
          'NOM_VOIE': 'RUE ANATOLE DE MONZIE',
          'IDVOIE_NCA': '06088AD0137',
          'NUM': 52,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      },
      {
        'geometry': {
          'type': 'Point',
          'coordinates': [
            7.30359363,
            43.73705241
          ]
        },
        'type': 'Feature',
        'id': 340,
        'properties': {
          'CONFORMITE': 0,
          'IDENT': 962,
          'COMPLEMENT': 'angle RUE DES EGLANTINES',
          'NOM_VOIE': 'AVENUE EMILE RIPERT',
          'IDVOIE_NCA': '06088AE0275',
          'NUM': 33,
          'CODE_INSEE': '06088',
          'NB_PLACE': 1
        }
      }
    ]
  };

  onMapReady(map: Map) {
    geoJSON(<GeoJsonObject> this.data, {
      pointToLayer: function(geoJsonPoint, latlng) {
        return marker(latlng, {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
          })
        });
      }
    }).addTo(map);
  }


}
