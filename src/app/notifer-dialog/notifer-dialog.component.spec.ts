import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiferDialogComponent } from './notifer-dialog.component';

describe('NotiferDialogComponent', () => {
  let component: NotiferDialogComponent;
  let fixture: ComponentFixture<NotiferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
