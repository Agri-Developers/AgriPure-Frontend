import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {PlantsService} from "../plants/service/plants.service";
import {Plants} from "../plants/model/Plants";
import { ActivatedRoute } from '@angular/router';
import { DialogSavePlantComponent } from 'src/app/components/dialog-save-plant/dialog-save-plant.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {

  private sub: any;

  plant: Plants = {
    id: 0,
    name: "",
    scientifistname: "",
    distancePlants: "",
    image: "",
    weather: "",
    variety: "",
    infoWeatherConditions: "",
    depth: "",
    infoDistanceBetween: "",
    infoIdealDepth: "",
    infolandType: "",
    infoFertFumig: "",
    ph: 0,
    savePlant: true
  };

  plantId?: Number;
  nameButton?: String;
  ID?: String;
  save_plant?: boolean;

  constructor(private plantsService: PlantsService, private route: ActivatedRoute, public dialog: MatDialog) {
    this.sub = this.route.params.subscribe(params => { this.plantId = +params['id']; });
    this.plantsService.getById(this.plantId).subscribe((response: any) => {this.plant = response});
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  showDialog(){
    const dialogRef = this.dialog.open(DialogSavePlantComponent, {
      width: '450px',
      height: '200px',
      data: {
        id: this.plant.id
      }
    });

    dialogRef.afterClosed().subscribe(result=>{window.location.reload()});

  }
}
