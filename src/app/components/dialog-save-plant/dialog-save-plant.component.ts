import { Component, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PlantsService} from "../../pages/plants/service/plants.service"
import {Plants} from "../../pages/plants/model/Plants";

@Component({
  selector: 'app-dialog-save-plant',
  templateUrl: './dialog-save-plant.component.html',
  styleUrls: ['./dialog-save-plant.component.css']
})
export class DialogSavePlantComponent implements OnInit, OnChanges {

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
    savePlant: false
  };

  constructor(public dialogRef: MatDialogRef<DialogSavePlantComponent>,@Inject(MAT_DIALOG_DATA) public data: Plants, private plantsService: PlantsService ) { 
    this.plantsService.getById(this.data.id).subscribe((response: any) => {this.plant = response});
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  savePlant(){
    if(this.plant.savePlant){
      this.plantsService.patch(this.plant.id, {"savePlant": false}).subscribe();
    }
    else{
      this.plantsService.patch(this.plant.id, {"savePlant": true}).subscribe();
    }
  }

  closeClick(){
    this.dialogRef.close();
  }

}
