import { Component, OnInit } from '@angular/core';
import { Plants } from "./model/Plants";
import { PlantsService } from "./service/plants.service";

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants: Plants[] = [];

  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
    this.plantsService.getAll().subscribe((response: any) => {this.plants = response});
  }


}
