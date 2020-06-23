import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { format } from 'date-fns';

export interface DialogData {
  resourceId: number;
  available: boolean;
  date: Date;
}

@Component({
  selector: 'app-resource-availability-dialog',
  templateUrl: './resource-availability-dialog.component.html',
  styleUrls: ['./resource-availability-dialog.component.scss'],
})
export class ResourceAvailabilityDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ResourceAvailabilityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  get date(): string {
    return format(this.data.date, 'M/dd/yyyy\' at \'HH:mm');
  }
}
