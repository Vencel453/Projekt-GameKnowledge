import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotauthorizatedComponent } from './notauthorizated.component';

describe('NotauthorizatedComponent', () => {
  let component: NotauthorizatedComponent;
  let fixture: ComponentFixture<NotauthorizatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotauthorizatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotauthorizatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
