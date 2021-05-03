import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApropoNousComponent } from './apropo-nous.component';

describe('ApropoNousComponent', () => {
  let component: ApropoNousComponent;
  let fixture: ComponentFixture<ApropoNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApropoNousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApropoNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
