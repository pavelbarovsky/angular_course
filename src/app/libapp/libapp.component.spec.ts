import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibappComponent } from './libapp.component';

describe('LibappComponent', () => {
  let component: LibappComponent;
  let fixture: ComponentFixture<LibappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
