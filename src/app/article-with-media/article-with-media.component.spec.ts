import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWithMediaComponent } from './article-with-media.component';

describe('ArticleWithMediaComponent', () => {
  let component: ArticleWithMediaComponent;
  let fixture: ComponentFixture<ArticleWithMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleWithMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleWithMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
