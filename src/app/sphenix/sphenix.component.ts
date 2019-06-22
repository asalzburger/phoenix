import {Component, OnInit} from '@angular/core';
import {EventdisplayService} from '../services/eventdisplay.service';
import {Configuration} from '../services/configuration';
import {JSONLoader} from 'three';
import {JsonLoaderService} from '../services/loaders/json-loader.service';


@Component({
  selector: 'app-sphenix',
  templateUrl: './sphenix.component.html',
  styleUrls: ['./sphenix.component.css']
})
export class SphenixComponent implements OnInit {



  constructor(private eventDisplay: EventdisplayService, private jsonLoader: JsonLoaderService) {
  }

  ngOnInit() {
    this.eventDisplay.init(new Configuration());
    this.eventDisplay.loadGeometryFromOBJ('assets/geometry/sPhenix/ITSU.obj', 'ITSU', 0xaaaaaa, false);
    this.eventDisplay.loadGeometryFromOBJ('assets/geometry/sPhenix/Silicon.obj', 'Silicon', 0x356aa5, false);
  }

}
