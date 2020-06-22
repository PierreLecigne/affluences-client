import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BookingService } from '../../services/booking.service';
import { Availability } from 'src/app/models/availability.interface';
import { ResourceAvailabilityDialogComponent } from '../../dialogs/resource-availability-dialog/resource-availability-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Time {
  hours: number;
  minutes: number;
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit, OnDestroy {
  scheduler: Time[];
  availabilityForm: FormGroup;
  resourceId: number;
  minDate: Date;
  private ngUnsubscribe = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.minDate = new Date();
    this.availabilityForm = this.formBuilder.group({
      date: [new Date(), Validators.required],
      time: ['', Validators.required],
    });
    this.scheduler = this.buildScheduler();
  }

  ngOnInit(): void {
    this.resourceId = Number(this.route.snapshot.paramMap.get('resourceId'));
  }

  buildScheduler(): Time[] {
    const scheduler = [];
    for (let i = 0; i <= 23; i++) {
      scheduler.push({ hours: i, minutes: 0 });
      scheduler.push({ hours: i, minutes: 30 });
    }
    return scheduler;
  }

  onSubmit(): void {
    if (this.availabilityForm.invalid) {
      return;
    }

    // Add selected time (hour and minutes) to selected date
    const date = this.availabilityForm.value.date;
    const time = this.scheduler[this.availabilityForm.value.time];
    date.setHours(time.hours, time.minutes);

    this.bookingService.getResourceAvailability(this.resourceId, date)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: Availability) => {
        // Open dialog to display result
        this.dialog.open(ResourceAvailabilityDialogComponent, {
          data: {
            resourceId: this.resourceId,
            available: data.available,
            date
          }
        });
      },
      () => {
        this.openErrorSnackBar('An error occured, please try again later');
      });
  }

  /**
   * Display time in 'HH:mm' format
   */
  displayTime(time: Time): string {
    return `${this.numberForceDigits(time.hours)}:${this.numberForceDigits(time.minutes)}`;
  }

  /**
   *
   * @param digit
   * Add digit to single-digit numbers, cast it to string to display concern
   */
  numberForceDigits(digit: number): string {
    return digit.toString().length === 1 ? `0${digit}` : digit.toString();
  }

  openErrorSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
