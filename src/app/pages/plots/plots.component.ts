import { Component, OnInit } from '@angular/core';
import {PlantsService} from "./service/plants.service";
import {Plants} from "./model/Plants";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteParcelComponent } from 'src/app/components/dialog-delete-parcel/dialog-delete-parcel.component';
import { DialogAddPlotComponent } from 'src/app/components/dialog-add-plot/dialog-add-plot.component';
import { DialogEditCoordinatesComponent } from 'src/app/components/dialog-edit-coordinates/dialog-edit-coordinates.component';
@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {
    
  plants: Plants[] = [];

  constructor(private plantsService: PlantsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.plantsService.getAll().subscribe((response: any) => {this.plants = response});
  }

  openDialogAddPlot(){
    const dialogRef = this.dialog.open(DialogAddPlotComponent, {
      width: '400px'
    })
  }
  openDialogEditCoordinates(){
    const dialogRef = this.dialog.open(DialogEditCoordinatesComponent, {
      width: '400px'
    })
  }
openDialogDeleteParcel(){
  const dialogRef = this.dialog.open(DialogDeleteParcelComponent, {
    width: '400px',
    data: {

    }
  })
} 
}