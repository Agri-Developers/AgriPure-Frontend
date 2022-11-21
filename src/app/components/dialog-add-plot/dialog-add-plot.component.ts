import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Plot } from 'src/app/pages/plots/model/Plot';

@Component({
  selector: 'app-dialog-add-plot',
  templateUrl: './dialog-add-plot.component.html',
  styleUrls: ['./dialog-add-plot.component.css']
})
export class DialogAddPlotComponent implements OnInit {

  plot: Plot[] = [];
  constructor(public dialogRef: MatDialogRef<DialogAddPlotComponent>) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


