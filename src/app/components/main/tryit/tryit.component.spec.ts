import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryitComponent } from './tryit.component';

describe('TryitComponent', () => {
  let component: TryitComponent;
  let fixture: ComponentFixture<TryitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
