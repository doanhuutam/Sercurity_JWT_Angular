import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-notifer-dialog',
  templateUrl: './notifer-dialog.component.html',
  styleUrls: ['./notifer-dialog.component.css']
})
export class NotiferDialogComponent implements OnInit {

  constructor(
    public dialogg: MatDialogRef<NotiferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {
  }

  ngOnInit(): void {
  }

  close():void {
    this.dialogg.close();
  }
}
