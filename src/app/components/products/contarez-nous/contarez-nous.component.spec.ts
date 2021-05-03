import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContarezNousComponent } from './contarez-nous.component';

describe('ContarezNousComponent', () => {
  let component: ContarezNousComponent;
  let fixture: ComponentFixture<ContarezNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContarezNousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContarezNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
