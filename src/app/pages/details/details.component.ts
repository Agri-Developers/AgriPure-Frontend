import { Component, OnInit } from '@angular/core';
import {PlantsService} from "../plants/service/plants.service";
import {Plants} from "../plants/model/Plants";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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
    ph: 0
  };
  /*id: number = 0;*/
  addPlant = true;
  nameButton: String = "Agregar Planta";
  ID: String = "green";
  ChangeButton(){
    if(this.addPlant){
      this.nameButton = "Eliminar Planta";
      this.addPlant = false;
      this.ID = "red";
    }
    else{
      this.nameButton = "Agregar Planta";
      this.addPlant = true;
      this.ID = "green"
    }
  }

  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
    this.plantsService.getById(this.plant.id).subscribe((response: any) => {this.plant = response});
  }
}
