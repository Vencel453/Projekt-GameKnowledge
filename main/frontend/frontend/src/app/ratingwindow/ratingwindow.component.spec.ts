import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingwindowComponent } from './ratingwindow.component';

describe('RatingwindowComponent', () => {
  let component: RatingwindowComponent;
  let fixture: ComponentFixture<RatingwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingwindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
