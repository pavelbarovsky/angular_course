import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPipeComponent } from './direct-pipe.component';

describe('DirectPipeComponent', () => {
  let component: DirectPipeComponent;
  let fixture: ComponentFixture<DirectPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
