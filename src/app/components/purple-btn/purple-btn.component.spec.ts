import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleBtnComponent } from './purple-btn.component';

describe('PurpleBtnComponent', () => {
  let component: PurpleBtnComponent;
  let fixture: ComponentFixture<PurpleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurpleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
