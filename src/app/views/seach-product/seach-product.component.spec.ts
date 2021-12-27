import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachProductComponent } from './seach-product.component';

describe('SeachProductComponent', () => {
  let component: SeachProductComponent;
  let fixture: ComponentFixture<SeachProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
