import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGaleryComponent } from './grid-galery.component';

describe('GridGaleryComponent', () => {
  let component: GridGaleryComponent;
  let fixture: ComponentFixture<GridGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridGaleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
