import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteSubredditComponent } from './crete-subreddit.component';

describe('CreteSubredditComponent', () => {
  let component: CreteSubredditComponent;
  let fixture: ComponentFixture<CreteSubredditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteSubredditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteSubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
