import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmploysComponent } from './list-employs.component';

describe('ListEmploysComponent', () => {
  let component: ListEmploysComponent;
  let fixture: ComponentFixture<ListEmploysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmploysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmploysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
