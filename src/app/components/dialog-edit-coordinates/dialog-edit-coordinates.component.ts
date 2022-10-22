import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-coordinates',
  templateUrl: './dialog-edit-coordinates.component.html',
  styleUrls: ['./dialog-edit-coordinates.component.css']
})
export class DialogEditCoordinatesComponent implements OnInit {
  coordinates?: string;
  constructor(public dialogRef: MatDialogRef<DialogEditCoordinatesComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
