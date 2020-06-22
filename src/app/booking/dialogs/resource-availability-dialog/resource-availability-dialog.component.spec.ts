import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAvailabilityDialogComponent } from './resource-availability-dialog.component';

describe('ResourceAvailabilityDialogComponent', () => {
  let component: ResourceAvailabilityDialogComponent;
  let fixture: ComponentFixture<ResourceAvailabilityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceAvailabilityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceAvailabilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
