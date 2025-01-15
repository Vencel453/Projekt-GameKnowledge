import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificgameComponent } from './specificgame.component';

describe('SpecificgameComponent', () => {
  let component: SpecificgameComponent;
  let fixture: ComponentFixture<SpecificgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
