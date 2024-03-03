import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizonToolCardsComponent } from './horizon-tool-cards.component';

describe('HorizonToolCardsComponent', () => {
  let component: HorizonToolCardsComponent;
  let fixture: ComponentFixture<HorizonToolCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizonToolCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizonToolCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
