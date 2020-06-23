import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

import { BookingRoutingModule } from './booking-routing.module';
import { ResourcesListComponent } from './pages/resources-list/resources-list.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourceAvailabilityDialogComponent } from './dialogs/resource-availability-dialog/resource-availability-dialog.component';


@NgModule({
  declarations: [ResourcesListComponent, ResourceComponent, ResourceAvailabilityDialogComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [MatDatepickerModule]
})
export class BookingModule { }
