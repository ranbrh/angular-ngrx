import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffresNavBarComponent } from './offres-nav-bar.component';



describe('ProductsNavBarComponent', () => {
  let component: OffresNavBarComponent;
  let fixture: ComponentFixture<OffresNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
