import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecommendationsComponent } from './user-recommendations.component';

describe('UserRecommendationsComponent', () => {
  let component: UserRecommendationsComponent;
  let fixture: ComponentFixture<UserRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecommendationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
