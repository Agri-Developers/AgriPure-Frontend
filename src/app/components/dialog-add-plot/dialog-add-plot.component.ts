import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-plot',
  templateUrl: './dialog-add-plot.component.html',
  styleUrls: ['./dialog-add-plot.component.css']
})
export class DialogAddPlotComponent implements OnInit {
  coordinates?: string;
  constructor(public dialogRef: MatDialogRef<DialogAddPlotComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


